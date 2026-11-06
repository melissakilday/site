import type { FAQItem } from '../components/FAQSchema.astro';

export const serviceFAQs: Record<string, FAQItem[]> = {
  'keratin-treatments': [
    {
      question: "How much is a keratin treatment?",
      answer: "At Hair By Melissa in Kaukapakapa, North Auckland, a keratin treatment is $180 and takes about 2 to 3 hours."
    },
    {
      question: "How long does a keratin treatment last?",
      answer: "About 6 months, depending on your hair and your aftercare. Sulfate-free shampoo and fewer washes help it last longer."
    },
    {
      question: "When can I wash my hair after a keratin treatment?",
      answer: "Wait 72 hours. Keep your hair dry and loose for those three days, then wash with a sulfate-free shampoo in lukewarm water."
    },
    {
      question: "Are keratin treatments good for your hair?",
      answer: "For frizzy, thick or hard-to-manage hair, keratin makes hair smoother, shinier and quicker to style, which means less daily heat. It relaxes curl and wave, so it isn't the right choice if you want to keep your full curl pattern. Melissa will tell you honestly at your consultation whether it suits your hair."
    },
    {
      question: "Can I colour my hair after a keratin treatment?",
      answer: "Yes. Wait at least two weeks after your keratin treatment before any colour, and let Melissa know so she can plan the timing with you."
    },
    {
      question: "Is a salon keratin treatment better than a home kit?",
      answer: "A salon treatment is applied section by section and sealed with a professional flat iron, with a consultation first to check it suits your hair. Home kits vary a lot, and uneven application is the most common problem."
    },
    {
      question: "Is your keratin treatment formaldehyde-free?",
      answer: "Yes. Melissa uses a formaldehyde-free keratin formula for every keratin treatment at the salon."
    },
    {
      question: "Do you offer nanoplasty as well?",
      answer: "Yes. Melissa offers nanoplasty too, from $200 depending on hair length. It takes about 3½ hours, lasts 3 to 6 months and you can wash straight away. Keratin is $180, lasts about 6 months and needs 72 hours before the first wash."
    }
  ],

  'nanoplasty': [
    {
      question: "What is nanoplasty?",
      answer: "Nanoplasty is a salon smoothing treatment for frizzy, long or hard-to-manage hair. It leaves hair smoother, shinier and easier to style, and at Hair By Melissa it's done with formaldehyde-free salon brands."
    },
    {
      question: "How much does nanoplasty cost?",
      answer: "At Hair By Melissa in Kaukapakapa, nanoplasty starts from $200. The final price depends on your hair length, and Melissa confirms it before she starts."
    },
    {
      question: "How long does nanoplasty last?",
      answer: "Around 3 to 6 months, depending on your hair, how often you wash it and the products you use."
    },
    {
      question: "Can I wash my hair after nanoplasty?",
      answer: "Yes. You can wash your hair straight away after a nanoplasty treatment. There's no waiting period."
    },
    {
      question: "Is nanoplasty formaldehyde-free?",
      answer: "Yes. Melissa uses formaldehyde-free professional salon brands for nanoplasty."
    },
    {
      question: "How long does a nanoplasty appointment take?",
      answer: "Allow about 3½ hours. It's one-on-one with Melissa, so there's no rushing."
    },
    {
      question: "Is nanoplasty or keratin better?",
      answer: "Neither is better for everyone. Nanoplasty suits long or very frizzy hair and lets you wash straight away; it lasts 3 to 6 months and starts from $200. Keratin is $180, lasts about 6 months and needs 72 hours before the first wash. Melissa will help you choose."
    },
    {
      question: "Who is nanoplasty for?",
      answer: "It's ideal for frizzy, long or unmanageable hair that takes a long time to dry and style. If you'd like to keep your natural curl or volume, talk to Melissa first."
    }
  ],
  
  'balayage': [
    {
      question: "How much does balayage cost in NZ?",
      answer: "Balayage at Hair By Melissa is $280, and the appointment takes 3-4 hours. Longer or thicker hair can take longer to process and style, so your exact appointment time may vary — we'll confirm this at consultation."
    },
    {
      question: "How long does balayage last?",
      answer: "Balayage grows out softly over several months, without the hard regrowth line you get with traditional highlights, so there's no fixed date by which it needs to be redone. Most clients come in for a refresh when they feel ready for one rather than on a strict schedule."
    },
    {
      question: "What's the difference between balayage and highlights?",
      answer: "Balayage is a freehand painting technique that creates natural, sun-kissed colour with softer grow-out, while highlights use foils for more uniform, structured colour placement. Balayage typically requires less maintenance and gives a more organic, dimensional result. See our full balayage vs highlights comparison for a detailed breakdown."
    },
    {
      question: "How often should I get balayage touch-ups?",
      answer: "There's no fixed schedule. If you like to keep the contrast fresh, plan on every 8 to 12 weeks. Because balayage grows out softly, you can go longer between appointments than with traditional highlights."
    },
    {
      question: "Can balayage work on dark hair?",
      answer: "Absolutely! Balayage looks stunning on dark hair, creating beautiful caramel, honey, or lighter brown tones. The technique is especially effective on brunettes as it mimics natural sun-lightening patterns that occur in darker hair."
    },
    {
      question: "How long does a balayage appointment take?",
      answer: "A balayage appointment takes 3 to 4 hours, including consultation, application, processing time, toning and styling. The exact time depends on your hair length, desired result, and whether additional services are included."
    },
    {
      question: "What's the maintenance routine for balayage?",
      answer: "Use colour-safe, sulfate-free shampoo and conditioner, apply purple shampoo weekly if you have blonde tones, deep condition regularly, and protect your hair from sun and chlorine exposure. Quality hair products will help maintain your colour vibrancy longer."
    }
  ],

  'womens-cut-finish': [
    {
      question: "Do you cut kids' hair?",
      answer: "Yes. Melissa cuts kids' hair at any age, gently and without rushing. Ask about kids' pricing when you book."
    },
    {
      question: "Are you open on Sundays?",
      answer: "Yes. Hair By Melissa is open Sundays from 9am to 5pm, and open 7 days overall. See the booking page for times that suit you."
    },
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
      answer: "Yes! Melissa has experience with all hair textures, lengths, and types - from fine straight hair to thick curly hair. Each cut is customised to work with your natural hair characteristics and personal style preferences."
    },
    {
      question: "Do you offer style consultations?",
      answer: "Absolutely! Every cut includes a detailed consultation where we discuss your lifestyle, maintenance preferences, face shape, and hair goals. A free hair health consultation comes with any service, which is a good chance to plan a bigger change."
    },
    {
      question: "How should I prepare for my haircut appointment?",
      answer: "Come with clean or day-old hair, bring photos of styles you like, and think about your daily styling routine. Be ready to discuss any concerns about your current hair and what you'd like to change or improve."
    }
  ],

  'full-head-highlights': [
    {
      question: "What's the difference between full and half head highlights?",
      answer: "Full head highlights cover your entire head for maximum brightness and dimension, while half head highlights focus on the top and sides. Full head highlighting provides more dramatic colour transformation and uniform lightness throughout all layers."
    },
    {
      question: "How long do full head highlights take?",
      answer: "Full head highlights typically take 2.5-3 hours, including consultation, sectioning, foil application, processing, toning if needed, and styling. The exact timing depends on your hair length, thickness, and desired result."
    },
    {
      question: "Will full head highlights damage my hair?",
      answer: "When done professionally with quality products, highlights cause minimal damage. We always finish with conditioning treatments. Proper aftercare with professional products helps maintain hair health."
    },
    {
      question: "How often should I refresh my highlights?",
      answer: "Full head highlights typically need refreshing every 6-8 weeks to maintain vibrant colour and blend regrowth. We can alternate between full applications and root touch-ups to maintain your look while minimising hair processing."
    },
    {
      question: "Can I go lighter gradually with highlights?",
      answer: "Yes! We often recommend gradual lightening over multiple appointments to maintain hair health and achieve your desired blonde level safely. This approach gives you beautiful results while keeping your hair in optimal condition."
    }
  ],

  'half-head-highlights': [
    {
      question: "How much are half head highlights?",
      answer: "$200 at Hair By Melissa, and the appointment takes about 2 to 2.5 hours. Partial foils are $150 and a full head of highlights is $280."
    },
    {
      question: "What's the difference between half head and full head highlights?",
      answer: "A half head places foils through the top and sides, where colour shows when your hair is down. A full head adds foils underneath as well, for all-over brightness. Half head is $200; full head is $280."
    },
    {
      question: "What areas do half head highlights cover?",
      answer: "Half head highlights cover the top sections, crown, and sides of your hair - essentially the areas most visible when your hair is styled. This creates beautiful dimension where it counts most while keeping costs moderate."
    },
    {
      question: "Are half head highlights good for first-time colouring?",
      answer: "Absolutely! Half head highlights are perfect for those new to hair colouring, offering significant impact with more manageable maintenance than full head highlighting. It's an excellent way to test how you like lighter hair."
    },
    {
      question: "How do half head highlights grow out?",
      answer: "Half head highlights grow out very naturally since the underneath layers remain your natural colour. This creates a softer regrowth line and allows you to extend time between touch-ups compared to full head colour."
    },
    {
      question: "Can half head highlights work with short hair?",
      answer: "Yes! Half head highlights work beautifully on short hair, focusing colour placement around your face and crown where it will be most noticeable and flattering. The technique adapts well to any hair length."
    },
    {
      question: "What maintenance do half head highlights require?",
      answer: "Refresh appointments every 6-8 weeks, use colour-safe shampoo and conditioner, apply purple shampoo weekly for blonde tones, and protect from sun exposure. The maintenance is more manageable than full head highlighting."
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
      question: "Are partial foils good for covering grey hair?",
      answer: "Yes! Partial foils are excellent for blending grey hair around your face and hairline. The strategic placement of lighter tones helps camouflage grey regrowth and creates a more youthful appearance."
    },
    {
      question: "How often should I get partial foils redone?",
      answer: "Partial foils typically need refreshing every 4-6 weeks, depending on your hair growth rate and how much contrast you want to maintain. They're perfect for regular maintenance colour."
    },
    {
      question: "Can partial foils be done on any hair colour?",
      answer: "Partial foils work on all hair colours but are especially effective on brown and dark blonde hair. We customise the lightener strength and processing time based on your starting colour to achieve beautiful, natural-looking results."
    }
  ],

  'permanent-tint-all-over': [
    {
      question: "What does permanent tint all-over cover?",
      answer: "Permanent tint all-over provides complete colour coverage from roots to ends, perfect for dramatic colour changes, covering grey hair completely, or refreshing your overall hair colour. It creates uniform, long-lasting colour throughout your entire head."
    },
    {
      question: "How long does permanent hair colour last?",
      answer: "Permanent hair colour typically lasts 6-8 weeks before needing a root touch-up, while the colour on your lengths can last 3-4 months depending on your hair porosity, maintenance routine, and colour choice."
    },
    {
      question: "Can I go lighter with permanent tint?",
      answer: "Permanent tint alone cannot lighten your hair significantly. For lighter results, we may need to pre-lighten your hair before applying the tint, or recommend highlights/balayage for a more gradual lightening approach."
    },
    {
      question: "What's the difference between semi and permanent tint?",
      answer: "Permanent tint penetrates the hair shaft and lasts until it grows out, while semi-permanent colour coats the hair and gradually fades over 4-6 weeks. Permanent tint provides better grey coverage and longer-lasting results."
    },
    {
      question: "How should I care for permanent colour?",
      answer: "Use sulfate-free, colour-safe shampoo and conditioner, wash hair less frequently with cool water, apply weekly deep conditioning treatments, and protect from sun exposure. Quality hair products significantly extend colour life."
    }
  ],

  'permanent-tint-touch-up': [
    {
      question: "How often do I need root touch-ups?",
      answer: "Most clients need root touch-ups every 4-6 weeks, depending on hair growth rate and grey coverage needs. Those with faster-growing hair or more grey may need touch-ups every 3-4 weeks."
    },
    {
      question: "What areas does a touch-up cover?",
      answer: "Root touch-ups focus on new growth, typically covering 1-2 inches from the scalp where your natural colour is showing. We carefully match your existing colour for seamless blending with previously coloured hair."
    },
    {
      question: "Can touch-ups damage my hair less than full colour?",
      answer: "Yes! Touch-ups are gentler since we only process new growth rather than your entire head of hair. This minimises chemical exposure to previously coloured hair while maintaining perfect colour consistency."
    },
    {
      question: "How long does a touch-up appointment take?",
      answer: "Root touch-up appointments typically take 1-1.5 hours, including consultation, application, processing time, and styling. It's a quicker service than full colour applications."
    },
    {
      question: "What if my touch-up doesn't match my existing colour?",
      answer: "Professional colour matching ensures perfect results every time. If you notice any variation, please contact us within 7 days and we'll make any necessary adjustments at no additional charge."
    }
  ],

  'toner': [
    {
      question: "What does toner do for my hair?",
      answer: "Toner refines and perfects your hair colour by neutralising unwanted tones, adding shine, and creating the exact shade you want. It's essential after lightening services to achieve that perfect blonde, brunette, or fashion colour."
    },
    {
      question: "How long does toner last?",
      answer: "Toner typically lasts 4-6 weeks, gradually fading with each wash. Purple shampoo can help extend toner life between appointments, especially for blonde tones that tend to develop brassiness."
    },
    {
      question: "Do I need toner after highlights?",
      answer: "Most highlighting services benefit from toner to achieve the desired shade and remove any unwanted yellow or orange tones. Toner is what transforms brassy highlights into beautiful, salon-perfect colour."
    },
    {
      question: "Can toner make my hair darker?",
      answer: "Yes! Toner can be used to make highlighted hair slightly darker, add depth, or create more natural-looking colour. It's perfect for adjusting colour that's too light or bright after lightening services."
    },
    {
      question: "How often should I get toner applied?",
      answer: "Most clients need toner refreshed every 4-6 weeks to maintain their desired shade. If you use purple shampoo at home and your colour fades evenly, you may be able to extend this to 6-8 weeks."
    }
  ],

  'blow-wave': [
    {
      question: "What is a blow wave?",
      answer: "A blow wave is a wash and salon blow dry that uses round brushes to add smoothness, volume and shape. At Hair By Melissa it's $50, takes about 45 to 60 minutes and usually lasts 3 to 5 days."
    },
    {
      question: "How long does a blow wave last?",
      answer: "A professional blow wave typically lasts 3-5 days with proper care, depending on your hair type and lifestyle. Using dry shampoo, sleeping on silk pillowcases, and avoiding humidity help extend the style."
    },
    {
      question: "What's the difference between a blow dry and blow wave?",
      answer: "A blow wave is a specialised styling technique that creates volume, movement, and shape using round brushes and professional techniques. It's more than just drying your hair - it's creating a polished, long-lasting style."
    },
    {
      question: "Can you do blow waves on all hair types?",
      answer: "Yes! Blow waves can be adapted for all hair lengths and textures, from fine straight hair to thick curly hair. We customise the technique and products used based on your hair's unique characteristics."
    },
    {
      question: "What products do you use for blow waves?",
      answer: "We use professional-grade heat protectants, volumising mousses, smoothing serums, and finishing sprays selected specifically for your hair type and desired style. All products are chosen to enhance your hair's natural beauty."
    },
    {
      question: "Should I wash my hair before a blow wave appointment?",
      answer: "You can arrive with clean hair or we can wash it for you as part of the service. Many clients prefer our luxurious shampoo and scalp massage as it's part of the relaxing salon experience."
    }
  ],

  'uv-protection-treatments': [
    {
      question: "Why does my hair need UV protection?",
      answer: "UV rays can fade hair colour, weaken hair proteins, cause dryness and brittleness, and lead to split ends. UV protection treatments create a barrier that shields your hair from sun damage while maintaining colour vibrancy."
    },
    {
      question: "How long do UV protection treatments last?",
      answer: "UV protection treatments typically last 4-6 weeks, depending on sun exposure, swimming frequency, and hair washing routine. Regular reapplication ensures continuous protection during high UV exposure periods."
    },
    {
      question: "Are UV treatments necessary for coloured hair?",
      answer: "Absolutely! Colour-treated hair is more vulnerable to UV damage, which can cause rapid fading, colour shifts, and dryness. UV protection treatments are essential for maintaining your colour investment and hair health."
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