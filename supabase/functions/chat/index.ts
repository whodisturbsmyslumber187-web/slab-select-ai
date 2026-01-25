import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  language?: "en" | "ar";
}

const systemPromptEn = `You are a helpful customer service assistant for Marmo Luxe, a premium marble and natural stone countertop company in Dubai. You help customers with:

1. Information about our marble and granite products (Calacatta, Statuario, Nero Marquina, etc.)
2. Services we offer (kitchen countertops, waterfall islands, backsplashes, bathroom vanities)
3. Our process (consultation, digital templating, CNC fabrication, installation)
4. Pricing inquiries (provide general guidance, suggest booking a consultation for quotes)
5. Booking showroom visits and consultations
6. General questions about natural stone care and maintenance

Key information:
- We serve both residential and commercial clients in Dubai and UAE
- We have a showroom in Al Quoz Industrial Area 4
- Open Saturday - Thursday, 9AM - 6PM
- 10-year warranty on workmanship
- 7-10 days turnaround for standard projects
- We source from Italy, Spain, and Brazil
- WhatsApp: +971 4 XXX XXXX

Be professional, helpful, and encourage customers to visit our showroom or book a consultation. Keep responses concise and friendly.`;

const systemPromptAr = `أنت مساعد خدمة عملاء مفيد لشركة مارمو لوكس، شركة رخام وأحجار طبيعية فاخرة في دبي. أنت تساعد العملاء في:

1. معلومات عن منتجات الرخام والجرانيت (كالاكاتا، ستاتواريو، نيرو ماركينا، إلخ)
2. الخدمات التي نقدمها (أسطح المطبخ، جزر شلال، جدران، أحواض الحمام)
3. عمليتنا (الاستشارة، القياس الرقمي، التصنيع بتقنية CNC، التركيب)
4. استفسارات الأسعار (قدم إرشادات عامة، اقترح حجز استشارة للعروض)
5. حجز زيارات صالة العرض والاستشارات
6. أسئلة عامة عن العناية بالأحجار الطبيعية وصيانتها

معلومات مهمة:
- نخدم العملاء السكنيين والتجاريين في دبي والإمارات
- لدينا صالة عرض في منطقة القوز الصناعية 4
- مفتوح السبت - الخميس، 9 صباحاً - 6 مساءً
- ضمان 10 سنوات على التصنيع
- 7-10 أيام للمشاريع القياسية
- نستورد من إيطاليا وإسبانيا والبرازيل
- واتساب: +971 4 XXX XXXX

كن محترفاً ومفيداً وشجع العملاء على زيارة صالة العرض أو حجز استشارة. اجعل الردود مختصرة وودية.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "en" }: ChatRequest = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = language === "ar" ? systemPromptAr : systemPromptEn;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
