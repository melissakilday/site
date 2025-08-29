import type { FAQItem } from '../components/FAQSchema.astro';

export const serviceFAQs: Record<string, FAQItem[]> = {
  'keratin-treatments': [
    {
      question: "How long do keratin treatments last?",
      answer: "Professional keratin treatments typically last 3-6 months, depending on your hair type, maintenance routine, and washing frequency. With proper aftercare using sulfate-free products, most clients enjoy smooth, manageable hair for 4-5 months before needing a touch-up."
    },
    {
      question: "What is the aftercare for keratin treatments?",
      answer: "For the first 72 hours after your keratin treatment, avoid washing your hair, using hair ties, clips, or creating any dents. After this period, use only sulfate-free shampoo and conditioner, avoid chlorine exposure, and sleep on a silk pillowcase to maintain results."
    },
    {
      question: "Can I color my hair after a keratin treatment?",
      answer: "Yes, you can color your hair after a keratin treatment, but it's recommended to wait at least 2 weeks. The keratin treatment may lighten your hair slightly, so a color refresh might be beneficial. Always consult with Melissa about timing for best results."
    },
    {
      question: "How much does a keratin treatment cost?",
      answer: "Contact us for current keratin treatment pricing as costs vary based on hair length, thickness, and condition. We provide personalized quotes during your consultation to ensure you get the best value for your specific hair needs."
    },
    {
      question: "Is keratin treatment safe for all hair types?",
      answer: "Yes, our formaldehyde-free keratin treatments are safe for all hair types, including color-treated, chemically processed, and naturally curly hair. The treatment actually helps repair damage while smoothing your hair texture."
    }
  ],
  
  'balayage': [
    {
      question: "What's the difference between balayage and highlights?",
      answer: "Balayage is a freehand painting technique that creates natural, sun-kissed color with softer grow-out, while highlights use foils for more uniform, structured color placement. Balayage typically requires less maintenance and gives a more organic, dimensional result."
    },
    {
      question: "How often should I get balayage touch-ups?",
      answer: "Balayage typically needs refreshing every 8-12 weeks, depending on how fast your hair grows and how much contrast you want to maintain. The beauty of balayage is its natural grow-out, so you can extend time between appointments compared to traditional highlights."
    },
    {
      question: "Can balayage work on dark hair?",
      answer: "Absolutely! Balayage looks stunning on dark hair, creating beautiful caramel, honey, or lighter brown tones. The technique is especially effective on brunettes as it mimics natural sun-lightening patterns that occur in darker hair."
    },
    {
      question: "How long does a balayage appointment take?",
      answer: "A full balayage appointment typically takes 2.5-3.5 hours, including consultation, application, processing time, toning, and styling. The exact time depends on your hair length, desired result, and whether additional services are included."
    },
    {
      question: "What's the maintenance routine for balayage?",
      answer: "Use color-safe, sulfate-free shampoo and conditioner, apply purple shampoo weekly if you have blonde tones, deep condition regularly, and protect your hair from sun and chlorine exposure. Quality hair products will help maintain your color vibrancy longer."
    }
  ],

  'womens-cut-finish': [
    {
      question: "How often should I get a haircut?",
      answer: "For most hair types, a trim every 6-8 weeks maintains healthy hair and keeps your style looking fresh. If you're growing your hair out, every 10-12 weeks is sufficient. Regular trims prevent split ends and maintain your hair's shape and movement."
    },
    {
      question: "What's included in the cut and finish service?",
      answer: "Your service includes a thorough consultation, relaxing shampoo with scalp massage, precision cutting tailored to your face shape and lifestyle, and professional styling with a blow-dry finish using premium products."
    },
    {
      question: "Can you work with all hair types?",
      answer: "Yes! Melissa has experience with all hair textures, lengths, and types - from fine straight hair to thick curly hair. Each cut is customized to work with your natural hair characteristics and personal style preferences."
    },
    {
      question: "Do you offer style consultations?",
      answer: "Absolutely! Every cut includes a detailed consultation where we discuss your lifestyle, maintenance preferences, face shape, and hair goals. For major changes, complimentary 15-minute consultations are available to plan your transformation."
    },
    {
      question: "How should I prepare for my haircut appointment?",
      answer: "Come with clean or day-old hair, bring photos of styles you like, and think about your daily styling routine. Be ready to discuss any concerns about your current hair and what you'd like to change or improve."
    }
  ],

  'full-head-highlights': [
    {
      question: "What's the difference between full and half head highlights?",
      answer: "Full head highlights cover your entire head for maximum brightness and dimension, while half head highlights focus on the top and sides. Full head highlighting provides more dramatic color transformation and uniform lightness throughout all layers."
    },
    {
      question: "How long do full head highlights take?",
      answer: "Full head highlights typically take 2.5-3 hours, including consultation, sectioning, foil application, processing, toning if needed, and styling. The exact timing depends on your hair length, thickness, and desired result."
    },
    {
      question: "Will full head highlights damage my hair?",
      answer: "When done professionally with quality products, highlights cause minimal damage. We use ammonia-free lighteners when possible and always finish with conditioning treatments. Proper aftercare with professional products helps maintain hair health."
    },
    {
      question: "How often should I refresh my highlights?",
      answer: "Full head highlights typically need refreshing every 6-8 weeks to maintain vibrant color and blend regrowth. We can alternate between full applications and root touch-ups to maintain your look while minimizing hair processing."
    },
    {
      question: "Can I go lighter gradually with highlights?",
      answer: "Yes! We often recommend gradual lightening over multiple appointments to maintain hair health and achieve your desired blonde level safely. This approach gives you beautiful results while keeping your hair in optimal condition."
    }
  ],

  'half-head-highlights': [
    {
      question: "What areas do half head highlights cover?",
      answer: "Half head highlights cover the top sections, crown, and sides of your hair - essentially the areas most visible when your hair is styled. This creates beautiful dimension where it counts most while keeping costs moderate."
    },
    {
      question: "Are half head highlights good for first-time coloring?",
      answer: "Absolutely! Half head highlights are perfect for those new to hair coloring, offering significant impact with more manageable maintenance than full head highlighting. It's an excellent way to test how you like lighter hair."
    },
    {
      question: "How do half head highlights grow out?",
      answer: "Half head highlights grow out very naturally since the underneath layers remain your natural color. This creates a softer regrowth line and allows you to extend time between touch-ups compared to full head color."
    },
    {
      question: "Can half head highlights work with short hair?",
      answer: "Yes! Half head highlights work beautifully on short hair, focusing color placement around your face and crown where it will be most noticeable and flattering. The technique adapts well to any hair length."
    },
    {
      question: "What maintenance do half head highlights require?",
      answer: "Refresh appointments every 6-8 weeks, use color-safe shampoo and conditioner, apply purple shampoo weekly for blonde tones, and protect from sun exposure. The maintenance is more manageable than full head highlighting."
    }
  ],

  'partial-foils': [
    {
      question: "What's the difference between partial foils and highlights?",
      answer: "Partial foils are a type of highlighting technique that covers about 20-30% of your hair, focusing on face-framing areas and the crown. It's more subtle than half head highlights and perfect for adding brightness without major commitment."
    },
    {
      question: "How long do partial foils take?",
      answer: "Partial foil appointments typically take 1-1.5 hours, making them a quicker option than full or half head highlights. This includes consultation, foil placement, processing, and styling."
    },
    {
      question: "Are partial foils good for covering gray hair?",
      answer: "Yes! Partial foils are excellent for blending gray hair around your face and hairline. The strategic placement of lighter tones helps camouflage gray regrowth and creates a more youthful appearance."
    },
    {
      question: "How often should I get partial foils redone?",
      answer: "Partial foils typically need refreshing every 4-6 weeks, depending on your hair growth rate and how much contrast you want to maintain. They're perfect for regular maintenance color."
    },
    {
      question: "Can partial foils be done on any hair color?",
      answer: "Partial foils work on all hair colors but are especially effective on brown and dark blonde hair. We customize the lightener strength and processing time based on your starting color to achieve beautiful, natural-looking results."
    }
  ],

  'permanent-tint-all-over': [
    {
      question: "What does permanent tint all-over cover?",
      answer: "Permanent tint all-over provides complete color coverage from roots to ends, perfect for dramatic color changes, covering gray hair completely, or refreshing your overall hair color. It creates uniform, long-lasting color throughout your entire head."
    },
    {
      question: "How long does permanent hair color last?",
      answer: "Permanent hair color typically lasts 6-8 weeks before needing a root touch-up, while the color on your lengths can last 3-4 months depending on your hair porosity, maintenance routine, and color choice."
    },
    {
      question: "Can I go lighter with permanent tint?",
      answer: "Permanent tint alone cannot lighten your hair significantly. For lighter results, we may need to pre-lighten your hair before applying the tint, or recommend highlights/balayage for a more gradual lightening approach."
    },
    {
      question: "What's the difference between semi and permanent tint?",
      answer: "Permanent tint penetrates the hair shaft and lasts until it grows out, while semi-permanent color coats the hair and gradually fades over 4-6 weeks. Permanent tint provides better gray coverage and longer-lasting results."
    },
    {
      question: "How should I care for permanent color?",
      answer: "Use sulfate-free, color-safe shampoo and conditioner, wash hair less frequently with cool water, apply weekly deep conditioning treatments, and protect from sun exposure. Quality hair products significantly extend color life."
    }
  ],

  'permanent-tint-touch-up': [
    {
      question: "How often do I need root touch-ups?",
      answer: "Most clients need root touch-ups every 4-6 weeks, depending on hair growth rate and gray coverage needs. Those with faster-growing hair or more gray may need touch-ups every 3-4 weeks."
    },
    {
      question: "What areas does a touch-up cover?",
      answer: "Root touch-ups focus on new growth, typically covering 1-2 inches from the scalp where your natural color is showing. We carefully match your existing color for seamless blending with previously colored hair."
    },
    {
      question: "Can touch-ups damage my hair less than full color?",
      answer: "Yes! Touch-ups are gentler since we only process new growth rather than your entire head of hair. This minimizes chemical exposure to previously colored hair while maintaining perfect color consistency."
    },
    {
      question: "How long does a touch-up appointment take?",
      answer: "Root touch-up appointments typically take 1-1.5 hours, including consultation, application, processing time, and styling. It's a quicker service than full color applications."
    },
    {
      question: "What if my touch-up doesn't match my existing color?",
      answer: "Professional color matching ensures perfect results every time. If you notice any variation, please contact us within 7 days and we'll make any necessary adjustments at no additional charge."
    }
  ],

  'toner': [
    {
      question: "What does toner do for my hair?",
      answer: "Toner refines and perfects your hair color by neutralizing unwanted tones, adding shine, and creating the exact shade you want. It's essential after lightening services to achieve that perfect blonde, brunette, or fashion color."
    },
    {
      question: "How long does toner last?",
      answer: "Toner typically lasts 4-6 weeks, gradually fading with each wash. Purple shampoo can help extend toner life between appointments, especially for blonde tones that tend to develop brassiness."
    },
    {
      question: "Do I need toner after highlights?",
      answer: "Most highlighting services benefit from toner to achieve the desired shade and remove any unwanted yellow or orange tones. Toner is what transforms brassy highlights into beautiful, salon-perfect color."
    },
    {
      question: "Can toner make my hair darker?",
      answer: "Yes! Toner can be used to make highlighted hair slightly darker, add depth, or create more natural-looking color. It's perfect for adjusting color that's too light or bright after lightening services."
    },
    {
      question: "How often should I get toner applied?",
      answer: "Most clients need toner refreshed every 4-6 weeks to maintain their desired shade. If you use purple shampoo at home and your color fades evenly, you may be able to extend this to 6-8 weeks."
    }
  ],

  'blow-wave': [
    {
      question: "How long does a blow wave last?",
      answer: "A professional blow wave typically lasts 3-5 days with proper care, depending on your hair type and lifestyle. Using dry shampoo, sleeping on silk pillowcases, and avoiding humidity help extend the style."
    },
    {
      question: "What's the difference between a blow dry and blow wave?",
      answer: "A blow wave is a specialized styling technique that creates volume, movement, and shape using round brushes and professional techniques. It's more than just drying your hair - it's creating a polished, long-lasting style."
    },
    {
      question: "Can you do blow waves on all hair types?",
      answer: "Yes! Blow waves can be adapted for all hair lengths and textures, from fine straight hair to thick curly hair. We customize the technique and products used based on your hair's unique characteristics."
    },
    {
      question: "What products do you use for blow waves?",
      answer: "We use professional-grade heat protectants, volumizing mousses, smoothing serums, and finishing sprays selected specifically for your hair type and desired style. All products are chosen to enhance your hair's natural beauty."
    },
    {
      question: "Should I wash my hair before a blow wave appointment?",
      answer: "You can arrive with clean hair or we can wash it for you as part of the service. Many clients prefer our luxurious shampoo and scalp massage as it's part of the relaxing salon experience."
    }
  ],

  'uv-protection-treatments': [
    {
      question: "Why does my hair need UV protection?",
      answer: "UV rays can fade hair color, weaken hair proteins, cause dryness and brittleness, and lead to split ends. UV protection treatments create a barrier that shields your hair from sun damage while maintaining color vibrancy."
    },
    {
      question: "How long do UV protection treatments last?",
      answer: "UV protection treatments typically last 4-6 weeks, depending on sun exposure, swimming frequency, and hair washing routine. Regular reapplication ensures continuous protection during high UV exposure periods."
    },
    {
      question: "Are UV treatments necessary for colored hair?",
      answer: "Absolutely! Color-treated hair is more vulnerable to UV damage, which can cause rapid fading, color shifts, and dryness. UV protection treatments are essential for maintaining your color investment and hair health."
    },
    {
      question: "Can UV treatments protect against chlorine damage too?",
      answer: "Many UV protection treatments also provide a barrier against chlorine and salt water, making them perfect for summer activities. They help prevent the green tinge that can occur in blonde hair and protect against chemical dryness."
    },
    {
      question: "What's the difference between UV spray and treatment?",
      answer: "Professional UV treatments penetrate the hair shaft for deep protection and conditioning, while home UV sprays provide surface protection. In-salon treatments offer superior, longer-lasting protection with added hair health benefits."
    }
  ]
};