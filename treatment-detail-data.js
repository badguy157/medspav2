// Treatment Detail Data
// This file contains all the content for treatment detail pages
// Data is keyed by treatment slug (kebab-case)

const TREATMENT_DETAIL_DATA = {
  "botox": {
    title: "Botox",
    tagline: "Smooth wrinkles and look refreshed—naturally.",
    whoFor: [
      {
        title: "Forehead lines",
        description: "Have lines on your forehead when you frown or raise your eyebrows"
      },
      {
        title: "Crow's feet",
        description: "Notice wrinkles around your eyes when you smile"
      },
      {
        title: "Prevent aging",
        description: "Want to prevent wrinkles from getting deeper over time"
      },
      {
        title: "Quick results",
        description: "Need a fast treatment with no downtime or recovery"
      }
    ],
    process: [
      {
        title: "Consultation",
        description: "We discuss your goals and examine the areas you want to treat. We'll create a customized plan just for you."
      },
      {
        title: "Preparation",
        description: "We clean the treatment area and may apply a numbing cream if needed (though most people don't need it)."
      },
      {
        title: "Injection",
        description: "Using a tiny needle, we inject small amounts of Botox into specific muscles. This takes about 10-15 minutes."
      },
      {
        title: "Aftercare",
        description: "You can resume normal activities immediately. We'll give you simple aftercare instructions to follow."
      }
    ],
    timeline: [
      {
        title: "Day 1: Right after treatment",
        description: "You may see tiny bumps where we injected, but they fade within an hour. You can return to work and normal activities immediately. Avoid lying down for 4 hours and don't exercise heavily for 24 hours."
      },
      {
        title: "Days 3-7: Results begin",
        description: "You'll start to notice your wrinkles smoothing out. The full effect develops gradually over this week."
      },
      {
        title: "Week 2: Full results",
        description: "Your results are now complete. You'll see smoother skin and a more refreshed appearance."
      },
      {
        title: "Months 3-4: Maintenance",
        description: "Results typically last 3-4 months. Book your next appointment when you notice lines starting to return."
      }
    ],
    faqs: [
      {
        q: "Does Botox hurt?",
        a: "Most people describe it as a tiny pinch. The needle is very small and the injections are quick. If you're nervous, we can apply a numbing cream first."
      },
      {
        q: "Will I look frozen or fake?",
        a: "Not when done correctly. Our goal is natural results—you'll still be able to make expressions, just with fewer wrinkles. We use conservative doses to avoid an overdone look."
      },
      {
        q: "How long does Botox last?",
        a: "Results typically last 3-4 months. First-time patients sometimes see results fade a bit sooner, around 2-3 months. With regular treatments, results may last longer."
      },
      {
        q: "Can I combine Botox with other treatments?",
        a: "Yes! Botox works well with fillers, facials, and other skin treatments. We can create a comprehensive plan during your consultation."
      },
      {
        q: "What's the difference between Botox and fillers?",
        a: "Botox relaxes muscles to smooth wrinkles caused by expressions (like frown lines). Fillers add volume to areas that have lost fullness (like lips or cheeks). Many people benefit from both."
      }
    ],
    testimonial: {
      quote: "I was nervous about looking 'done,' but my results are so natural. My forehead is smooth but I can still make expressions. I just look like I got a good night's sleep!",
      name: "Sarah M.",
      label: "Botox treatment (Sample)"
    }
  },

  "lip-filler": {
    title: "Lip Filler",
    tagline: "Get fuller, more defined lips—naturally.",
    whoFor: [
      {
        title: "Thin lips",
        description: "Want to add volume to naturally thin lips"
      },
      {
        title: "Lost volume",
        description: "Notice your lips have gotten thinner with age"
      },
      {
        title: "Better definition",
        description: "Want a more defined lip border or better shape"
      },
      {
        title: "Immediate results",
        description: "Looking for instant, visible improvement"
      }
    ],
    process: [
      {
        title: "Consultation",
        description: "We discuss your desired look and examine your lip anatomy. We'll show you before/after examples and create a personalized plan."
      },
      {
        title: "Numbing",
        description: "We apply a topical numbing cream to ensure your comfort during the procedure."
      },
      {
        title: "Filler injection",
        description: "Using a fine needle or cannula, we carefully inject hyaluronic acid filler into your lips. This takes about 15-20 minutes."
      },
      {
        title: "Shaping & aftercare",
        description: "We massage and shape the filler for even distribution. You'll see immediate results, though some swelling is normal for 24-48 hours."
      }
    ],
    timeline: [
      {
        title: "Day 1: Immediate results with swelling",
        description: "Your lips will look fuller right away, but expect some swelling and possible bruising. Ice packs help reduce swelling."
      },
      {
        title: "Days 2-3: Swelling reduces",
        description: "Most swelling goes down. You'll start to see your true results. Avoid strenuous exercise and hot beverages."
      },
      {
        title: "Week 1-2: Final results appear",
        description: "Swelling is completely gone. Your lips look natural and beautifully enhanced."
      },
      {
        title: "Months 6-12: Maintenance",
        description: "Results last 6-12 months depending on the filler used and your metabolism. Schedule a touch-up when you notice volume fading."
      }
    ],
    faqs: [
      {
        q: "Will my lips look overdone?",
        a: "Not if that's not your goal. We specialize in natural-looking results and can add as little or as much volume as you want. We recommend starting conservatively—you can always add more later."
      },
      {
        q: "Does lip filler hurt?",
        a: "We use numbing cream and most fillers contain lidocaine, so discomfort is minimal. You'll feel pressure and slight pinching, but most people tolerate it well."
      },
      {
        q: "How long does lip filler last?",
        a: "Most lip fillers last 6-12 months. Your body gradually absorbs the hyaluronic acid over time. Regular touch-ups maintain your results."
      },
      {
        q: "Can I kiss or eat normally after?",
        a: "Yes, but be gentle for the first 24 hours. Avoid excessive pressure on your lips and stick to softer foods if your lips feel tender."
      },
      {
        q: "What if I don't like the results?",
        a: "Hyaluronic acid fillers can be dissolved with an enzyme if needed. However, most people love their results once swelling subsides."
      }
    ],
    testimonial: {
      quote: "I've always had thin lips and felt self-conscious. My results are so natural—people just think I'm wearing a great lip color! I finally feel confident smiling in photos.",
      name: "Emily R.",
      label: "Lip filler treatment (Sample)"
    }
  },

  "cheek-filler": {
    title: "Cheek Filler",
    tagline: "Restore youthful contours and lift—naturally.",
    whoFor: [
      {
        title: "Volume loss",
        description: "Notice your cheeks have lost fullness and look hollow"
      },
      {
        title: "Sagging appearance",
        description: "Want to lift and restore youthful contours"
      },
      {
        title: "Flat cheekbones",
        description: "Desire more defined, sculpted cheekbones"
      },
      {
        title: "Non-surgical lift",
        description: "Want to look refreshed without surgery or downtime"
      }
    ],
    process: [
      {
        title: "Consultation & mapping",
        description: "We assess your facial structure and discuss your aesthetic goals. We'll map out injection points for optimal lifting and contouring."
      },
      {
        title: "Numbing",
        description: "We apply numbing cream to ensure your comfort throughout the treatment."
      },
      {
        title: "Filler placement",
        description: "Using a cannula or needle, we strategically place filler to restore volume and create lift. This takes about 20-30 minutes."
      },
      {
        title: "Sculpting & review",
        description: "We massage and sculpt the filler, then review your results together. You'll see immediate improvement."
      }
    ],
    timeline: [
      {
        title: "Day 1: Immediate volume with swelling",
        description: "You'll see instant lift and volume, though some swelling is normal. Avoid touching or massaging the area."
      },
      {
        title: "Days 3-5: Swelling subsides",
        description: "Most swelling reduces. Your cheeks settle into their natural, lifted position."
      },
      {
        title: "Week 2: Final results",
        description: "All swelling is gone. You'll see the full effect—lifted, contoured cheeks with a youthful appearance."
      },
      {
        title: "Months 12-18: Longevity",
        description: "Cheek filler typically lasts 12-18 months. Schedule a touch-up appointment when you notice volume fading."
      }
    ],
    faqs: [
      {
        q: "Will cheek filler look natural?",
        a: "Yes, when done properly. We focus on restoring your natural facial structure and proportions, not creating an overfilled look. The goal is to look refreshed, not overdone."
      },
      {
        q: "Does it hurt?",
        a: "Most people experience minimal discomfort. We use numbing cream and many fillers contain lidocaine. You may feel pressure during injection."
      },
      {
        q: "How is this different from a facelift?",
        a: "Cheek filler is non-surgical with no downtime. It adds volume and lift, but doesn't remove excess skin like a facelift does. It's perfect for earlier signs of aging."
      },
      {
        q: "Can I combine this with other treatments?",
        a: "Absolutely! Cheek filler works beautifully with Botox, lip filler, or under-eye filler for comprehensive facial rejuvenation."
      },
      {
        q: "How long does it last?",
        a: "Cheek filler typically lasts 12-18 months because the area doesn't move as much as lips. Results are long-lasting compared to other facial areas."
      }
    ],
    testimonial: {
      quote: "The lift I got from cheek filler is amazing! My whole face looks more youthful and I don't have that tired, sagging look anymore. People say I look well-rested.",
      name: "Jennifer K.",
      label: "Cheek filler treatment (Sample)"
    }
  },

  "under-eye-filler": {
    title: "Under-Eye Filler",
    tagline: "Look well-rested and refreshed—naturally.",
    whoFor: [
      {
        title: "Dark circles",
        description: "Have shadows or dark circles under your eyes"
      },
      {
        title: "Hollows & bags",
        description: "Notice hollowness or bags beneath your eyes"
      },
      {
        title: "Tired appearance",
        description: "Look tired even when you're well-rested"
      },
      {
        title: "Instant improvement",
        description: "Want immediate results with no surgery"
      }
    ],
    process: [
      {
        title: "Consultation",
        description: "We examine your under-eye area and discuss your concerns. We'll determine if filler is right for you."
      },
      {
        title: "Numbing",
        description: "We apply numbing cream to minimize discomfort in this sensitive area."
      },
      {
        title: "Careful injection",
        description: "Using a cannula for safety, we precisely place filler to fill hollows and smooth the tear trough. This delicate procedure takes about 15-20 minutes."
      },
      {
        title: "Assessment",
        description: "We review your results and provide aftercare instructions. Results are visible immediately."
      }
    ],
    timeline: [
      {
        title: "Day 1: Immediate smoothing",
        description: "You'll see hollows filled and dark circles diminished right away. Some swelling is normal—use ice packs and sleep elevated."
      },
      {
        title: "Days 3-7: Settling period",
        description: "Swelling and any minor bruising fade. The filler settles into place naturally."
      },
      {
        title: "Week 2: Final results",
        description: "Your under-eyes look smooth, refreshed, and rested. The improvement is subtle yet transformative."
      },
      {
        title: "Months 9-12: Duration",
        description: "Results typically last 9-12 months. Book a touch-up when you notice hollows returning."
      }
    ],
    faqs: [
      {
        q: "Is under-eye filler safe?",
        a: "When performed by an experienced injector, yes. The under-eye area requires precision and expertise. We use a cannula technique to minimize risk."
      },
      {
        q: "Will it look puffy or fake?",
        a: "Not when done correctly. We use the right amount of filler and proper placement to smooth hollows without creating puffiness."
      },
      {
        q: "Does it hurt?",
        a: "The under-eye area is sensitive, but we use numbing cream and most fillers contain lidocaine. Most people tolerate it well."
      },
      {
        q: "Can filler fix my dark circles?",
        a: "Filler works best for dark circles caused by hollowing and shadows. If your dark circles are from pigmentation, other treatments may be better."
      },
      {
        q: "How long does it last?",
        a: "Under-eye filler typically lasts 9-12 months. Some people find it lasts even longer in this area."
      }
    ],
    testimonial: {
      quote: "I always looked exhausted because of my under-eye hollows. After filler, I look awake and refreshed! No more people asking if I'm tired. Total game-changer.",
      name: "Rachel T.",
      label: "Under-eye filler treatment (Sample)"
    }
  },

  "jawline-filler": {
    title: "Jawline Filler",
    tagline: "Define and sculpt your profile—naturally.",
    whoFor: [
      {
        title: "Weak jawline",
        description: "Want more definition and a stronger jaw"
      },
      {
        title: "Sagging jowls",
        description: "Notice early jowling or loss of definition"
      },
      {
        title: "Asymmetry",
        description: "Have slight asymmetry you'd like to balance"
      },
      {
        title: "Sculpted look",
        description: "Desire a more contoured, chiseled appearance"
      }
    ],
    process: [
      {
        title: "Facial analysis",
        description: "We assess your bone structure and facial proportions. We'll create a customized treatment plan to enhance your natural features."
      },
      {
        title: "Numbing",
        description: "We apply numbing cream to the treatment area for your comfort."
      },
      {
        title: "Strategic placement",
        description: "Using a cannula or needle, we place filler along the jawline to create definition and structure. This takes about 30 minutes."
      },
      {
        title: "Sculpting & review",
        description: "We shape the filler and review your profile from all angles. Results are immediately visible."
      }
    ],
    timeline: [
      {
        title: "Day 1: Immediate definition",
        description: "You'll see a more defined jawline right away. Some swelling and tenderness are normal. Avoid heavy chewing."
      },
      {
        title: "Days 3-5: Swelling reduces",
        description: "Most swelling subsides. The true contour of your jawline becomes apparent."
      },
      {
        title: "Week 2: Final contour",
        description: "All swelling is gone. Your jawline looks naturally defined and sculpted."
      },
      {
        title: "Months 12-18: Long-lasting results",
        description: "Jawline filler typically lasts 12-18 months. Schedule maintenance when you notice softening."
      }
    ],
    faqs: [
      {
        q: "Will jawline filler look natural?",
        a: "Yes. We enhance your natural bone structure rather than creating an unnatural shape. The goal is subtle definition, not a dramatic change."
      },
      {
        q: "Does it hurt?",
        a: "Most people experience minimal discomfort. We use numbing cream and the filler itself contains lidocaine for comfort."
      },
      {
        q: "Can it help with a double chin?",
        a: "Jawline filler can improve the appearance of a mild double chin by creating better definition. For more significant concerns, we may recommend combining with chin filler or other treatments."
      },
      {
        q: "How much filler do I need?",
        a: "It varies based on your anatomy and goals. Most people need 1-3 syringes for optimal results. We'll discuss this during your consultation."
      },
      {
        q: "Is this only for men?",
        a: "Not at all! Both men and women seek jawline filler for definition. We customize the treatment to create natural results for your gender and features."
      }
    ],
    testimonial: {
      quote: "I never had a defined jawline and it always bothered me in photos. After jawline filler, my profile looks so much stronger! I'm way more confident now.",
      name: "Alex M.",
      label: "Jawline filler treatment (Sample)"
    }
  },

  "chemical-peel": {
    title: "Chemical Peel",
    tagline: "Reveal smoother, brighter skin—naturally.",
    whoFor: [
      {
        title: "Dull skin",
        description: "Have lackluster skin that needs brightening"
      },
      {
        title: "Uneven tone",
        description: "Struggle with dark spots or hyperpigmentation"
      },
      {
        title: "Fine lines",
        description: "Want to reduce fine lines and texture issues"
      },
      {
        title: "Acne-prone",
        description: "Deal with acne, blackheads, or enlarged pores"
      }
    ],
    process: [
      {
        title: "Skin assessment",
        description: "We examine your skin type and concerns. We'll choose the right peel strength and formula for your needs."
      },
      {
        title: "Cleansing",
        description: "We thoroughly cleanse your skin to remove all makeup, oil, and debris."
      },
      {
        title: "Peel application",
        description: "We apply the chemical solution evenly to your face. You may feel tingling or warmth. The peel stays on for a specific time based on the formula."
      },
      {
        title: "Neutralizing & soothing",
        description: "We neutralize the peel and apply calming serums. We'll provide detailed aftercare instructions for optimal results."
      }
    ],
    timeline: [
      {
        title: "Day 1: Slight redness",
        description: "Your skin may look slightly pink or red, similar to a mild sunburn. Follow your gentle skincare routine and avoid sun exposure."
      },
      {
        title: "Days 3-5: Peeling begins",
        description: "Your skin starts to flake or peel. This is normal! Don't pick—let it shed naturally. Keep your skin moisturized."
      },
      {
        title: "Days 5-7: Fresh skin revealed",
        description: "Peeling is mostly complete. You'll see brighter, smoother skin emerging."
      },
      {
        title: "Week 2: Glowing results",
        description: "Your skin looks noticeably brighter, smoother, and more even. Continue sun protection and gentle care."
      }
    ],
    faqs: [
      {
        q: "Does a chemical peel hurt?",
        a: "You may feel tingling, warmth, or slight stinging during application, but it's not typically painful. We can adjust the strength if needed."
      },
      {
        q: "How long is the downtime?",
        a: "It depends on the peel strength. Light peels have minimal downtime (1-2 days of mild redness). Medium peels may cause 3-7 days of peeling. We'll help you choose the right option."
      },
      {
        q: "Will I actually peel?",
        a: "Not always. Some lighter peels cause minimal visible peeling—you'll just notice brighter skin. Stronger peels cause more obvious shedding."
      },
      {
        q: "How often should I get chemical peels?",
        a: "Light peels can be done every 2-4 weeks. Medium peels are usually spaced 1-3 months apart. We'll create a treatment plan for your goals."
      },
      {
        q: "Can I wear makeup after?",
        a: "Wait at least 24 hours before applying makeup. Use gentle, non-irritating products and mineral makeup when you resume."
      }
    ],
    testimonial: {
      quote: "My skin was so dull and uneven. After a series of chemical peels, it's glowing! My dark spots faded and my texture is so much smoother. I'm obsessed!",
      name: "Maya P.",
      label: "Chemical peel treatment (Sample)"
    }
  },

  "microneedling": {
    title: "Microneedling",
    tagline: "Build collagen and transform your skin texture—naturally.",
    whoFor: [
      {
        title: "Acne scars",
        description: "Have acne scars or other scarring you want to minimize"
      },
      {
        title: "Large pores",
        description: "Notice enlarged pores that make your skin look uneven"
      },
      {
        title: "Texture issues",
        description: "Want to improve overall skin texture and firmness"
      },
      {
        title: "Natural glow",
        description: "Looking for a natural way to boost collagen production"
      }
    ],
    process: [
      {
        title: "Consultation & prep",
        description: "We assess your skin and discuss your goals. Then we cleanse your face and apply a numbing cream to ensure your comfort."
      },
      {
        title: "Numbing time",
        description: "We let the numbing cream sit for 20-30 minutes so you'll be comfortable during treatment."
      },
      {
        title: "Microneedling treatment",
        description: "Using a specialized device, we create controlled micro-injuries in your skin. This triggers your body's natural healing and collagen production."
      },
      {
        title: "Serum & recovery",
        description: "We apply a healing serum to nourish your skin. Your face will be red (like a sunburn) for 1-2 days."
      }
    ],
    timeline: [
      {
        title: "Days 1-3: Initial healing",
        description: "Your skin will be red and may feel tight, similar to a sunburn. Avoid makeup for 24 hours and use only gentle, approved products."
      },
      {
        title: "Days 3-7: Peeling phase",
        description: "You may experience light flaking or peeling as your skin renews itself. Keep your skin moisturized and avoid picking."
      },
      {
        title: "Weeks 2-4: Glow begins",
        description: "You'll notice your skin looking brighter and more even. This is when the 'glow' starts to appear."
      },
      {
        title: "Weeks 4-6: Full results",
        description: "Collagen production peaks around 4-6 weeks. You'll see improved texture, reduced scarring, and firmer skin. For best results, we recommend 3-6 treatments spaced 4-6 weeks apart."
      }
    ],
    faqs: [
      {
        q: "Does microneedling hurt?",
        a: "We apply numbing cream beforehand, so most people feel only mild pressure or tingling. The sensation is tolerable and the results are worth it."
      },
      {
        q: "How is this different from dermarolling at home?",
        a: "Professional microneedling goes deeper and is more controlled than at-home devices. We use medical-grade equipment in a sterile environment for better, safer results."
      },
      {
        q: "Can I wear makeup after treatment?",
        a: "Wait at least 24 hours before applying makeup. Your skin needs time to heal and close the micro-channels created during treatment."
      },
      {
        q: "How many treatments do I need?",
        a: "Most people see good results with 3-6 sessions spaced 4-6 weeks apart. We'll create a personalized plan during your consultation."
      },
      {
        q: "Can I do this if I have active acne?",
        a: "We need to wait until active breakouts are healed. Microneedling is great for acne scars, but treating active acne could spread bacteria."
      }
    ],
    testimonial: {
      quote: "After three sessions, my acne scars have faded so much! My skin texture is smoother and my pores look smaller. People keep asking what I'm doing differently.",
      name: "Jessica L.",
      label: "Microneedling treatment (Sample)"
    }
  },

  "laser-resurfacing": {
    title: "Laser Resurfacing",
    tagline: "Transform your skin with advanced technology—naturally.",
    whoFor: [
      {
        title: "Sun damage",
        description: "Have age spots, sun spots, or pigmentation issues"
      },
      {
        title: "Deep wrinkles",
        description: "Want to reduce moderate to deep lines and wrinkles"
      },
      {
        title: "Scarring",
        description: "Have acne scars or other textural irregularities"
      },
      {
        title: "Skin renewal",
        description: "Looking for dramatic skin rejuvenation"
      }
    ],
    process: [
      {
        title: "Consultation & planning",
        description: "We assess your skin concerns and determine the right laser type and intensity for your needs and skin type."
      },
      {
        title: "Preparation",
        description: "We cleanse your skin and may apply numbing cream or cooling gel for comfort during treatment."
      },
      {
        title: "Laser treatment",
        description: "We pass the laser over treatment areas, targeting damaged skin cells. You'll feel warmth and possibly snapping sensations. Treatment takes 30-60 minutes depending on the area."
      },
      {
        title: "Cooling & aftercare",
        description: "We apply soothing ointment and provide detailed recovery instructions. Your skin will be red and sensitive initially."
      }
    ],
    timeline: [
      {
        title: "Days 1-3: Intense redness",
        description: "Your skin will be very red, similar to a severe sunburn. Follow your prescribed skincare routine carefully. Rest and avoid all sun exposure."
      },
      {
        title: "Days 3-7: Peeling begins",
        description: "Your skin starts to peel or flake as damaged cells shed. Keep skin moisturized and never pick at peeling skin."
      },
      {
        title: "Weeks 2-4: Pink phase",
        description: "Peeling is complete but skin remains pink. You can use makeup to cover redness. New skin is forming underneath."
      },
      {
        title: "Weeks 6-12: Full results emerge",
        description: "Redness fades completely. You'll see dramatically smoother, more even skin with reduced wrinkles and improved texture. Results continue improving for months."
      }
    ],
    faqs: [
      {
        q: "Does laser resurfacing hurt?",
        a: "We use numbing cream and cooling techniques. You may feel warmth or snapping during treatment, but most people tolerate it well."
      },
      {
        q: "How long is the recovery?",
        a: "It depends on the laser intensity. Fractional lasers have 3-7 days of social downtime. More aggressive treatments may need 7-14 days. We'll discuss options based on your schedule."
      },
      {
        q: "Is it safe for all skin tones?",
        a: "Some lasers are better for certain skin tones than others. We'll choose the safest, most effective laser for your skin type during consultation."
      },
      {
        q: "How many treatments do I need?",
        a: "Many people see excellent results with one treatment. Some concerns may need 2-3 sessions spaced several months apart."
      },
      {
        q: "When will I see results?",
        a: "You'll see improvement once healing is complete (2-4 weeks), but results continue improving for 3-6 months as collagen remodels."
      }
    ],
    testimonial: {
      quote: "I had significant sun damage and deep lines. Laser resurfacing was a game-changer! My skin looks 10 years younger. The recovery was worth it for these results.",
      name: "Linda S.",
      label: "Laser resurfacing treatment (Sample)"
    }
  },

  "hydrating-facial": {
    title: "Hydrating Facial",
    tagline: "Nourish and restore radiance—naturally.",
    whoFor: [
      {
        title: "Dry skin",
        description: "Have dehydrated, flaky, or tight-feeling skin"
      },
      {
        title: "Dull complexion",
        description: "Notice your skin lacks radiance and glow"
      },
      {
        title: "Stressed skin",
        description: "Need to restore and refresh tired, stressed skin"
      },
      {
        title: "Regular maintenance",
        description: "Want to maintain healthy, glowing skin"
      }
    ],
    process: [
      {
        title: "Cleansing & analysis",
        description: "We remove makeup and impurities, then analyze your skin to customize the treatment for your specific needs."
      },
      {
        title: "Exfoliation",
        description: "We gently exfoliate to remove dead skin cells, allowing better absorption of hydrating serums."
      },
      {
        title: "Hydration infusion",
        description: "We apply intensive hydrating serums, masks, and treatments tailored to your skin. This deeply nourishes and plumps your skin."
      },
      {
        title: "Massage & finishing",
        description: "We perform a relaxing facial massage to boost circulation, then seal everything in with moisturizer and SPF."
      }
    ],
    timeline: [
      {
        title: "Immediately: Instant glow",
        description: "Your skin looks plump, dewy, and radiant as soon as treatment is complete. Makeup glides on beautifully if you choose to apply it."
      },
      {
        title: "Days 1-3: Peak hydration",
        description: "Your skin feels soft, supple, and deeply hydrated. Fine lines appear minimized."
      },
      {
        title: "Week 1: Sustained improvement",
        description: "With proper home care, your glow continues. Skin stays hydrated and healthy-looking."
      },
      {
        title: "Monthly maintenance",
        description: "For best results, we recommend monthly hydrating facials to maintain optimal skin health and hydration."
      }
    ],
    faqs: [
      {
        q: "Is there any downtime?",
        a: "None at all! You can return to normal activities immediately. Many people get facials before special events because results are instant."
      },
      {
        q: "How is this different from a spa facial?",
        a: "We use medical-grade products and techniques not available at typical spas. Our facials are customized by skin experts for better, longer-lasting results."
      },
      {
        q: "Can I wear makeup after?",
        a: "Yes, though your skin will look so good you might not want to! If you do apply makeup, it will go on beautifully over hydrated, prepped skin."
      },
      {
        q: "How often should I get facials?",
        a: "Monthly facials are ideal for maintaining healthy, glowing skin. At minimum, aim for one every 6-8 weeks."
      },
      {
        q: "Will it help with wrinkles?",
        a: "Hydrated skin minimizes the appearance of fine lines. For deeper wrinkles, we can combine facials with other treatments like Botox or fillers."
      }
    ],
    testimonial: {
      quote: "My skin was so dry and dull. After the hydrating facial, it's glowing! It feels soft and plump. I try to get one every month now—it's like a reset for my skin.",
      name: "Sophia W.",
      label: "Hydrating facial treatment (Sample)"
    }
  },

  "led-therapy": {
    title: "LED Therapy",
    tagline: "Heal and rejuvenate with light—naturally.",
    whoFor: [
      {
        title: "Acne-prone",
        description: "Struggle with breakouts and want to calm inflammation"
      },
      {
        title: "Anti-aging",
        description: "Want to boost collagen and reduce fine lines"
      },
      {
        title: "Redness",
        description: "Have rosacea, sensitivity, or chronic redness"
      },
      {
        title: "Gentle treatment",
        description: "Looking for a relaxing, non-invasive option with no downtime"
      }
    ],
    process: [
      {
        title: "Skin cleansing",
        description: "We remove all makeup and cleanse your skin to prepare it for optimal light absorption."
      },
      {
        title: "Light selection",
        description: "We choose the right LED color for your concerns (red for anti-aging, blue for acne, or a combination)."
      },
      {
        title: "LED treatment",
        description: "You relax while the LED panel delivers therapeutic light to your skin. Treatment takes 15-30 minutes. It's painless and many people find it relaxing."
      },
      {
        title: "Finishing touches",
        description: "We apply serums and moisturizer. Your skin absorbs products better after LED therapy."
      }
    ],
    timeline: [
      {
        title: "Immediately: Calm, soothed skin",
        description: "Your skin may look slightly less red and more even. The treatment is cumulative, so results build over time."
      },
      {
        title: "After 3-4 sessions: Noticeable changes",
        description: "You'll start seeing clearer skin (if treating acne) or a healthy glow (if treating aging). Redness and inflammation reduce."
      },
      {
        title: "After 8-12 sessions: Optimal results",
        description: "Your skin looks clearer, brighter, and more even. Fine lines appear softer. Inflammation and breakouts decrease significantly."
      },
      {
        title: "Maintenance: Weekly or bi-weekly",
        description: "For best results, continue with regular sessions. LED works best as part of an ongoing skincare routine."
      }
    ],
    faqs: [
      {
        q: "Does LED therapy hurt?",
        a: "Not at all! You won't feel anything except maybe gentle warmth. It's completely painless and relaxing."
      },
      {
        q: "How is this different from tanning beds?",
        a: "LED therapy uses specific wavelengths of light for healing—no UV rays. It's completely safe and won't damage your skin or cause tanning."
      },
      {
        q: "How many treatments do I need?",
        a: "Most people need 8-12 sessions for optimal results, done 1-2 times per week. After that, monthly maintenance sessions help sustain results."
      },
      {
        q: "Can I combine this with other treatments?",
        a: "Yes! LED therapy pairs beautifully with facials, chemical peels, microneedling, and more. It enhances healing and results."
      },
      {
        q: "Is it safe for all skin types?",
        a: "Yes. LED therapy is safe for all skin tones and types, including sensitive skin."
      }
    ],
    testimonial: {
      quote: "I was skeptical about LED therapy, but it's helped my breakouts so much! My skin is calmer and clearer. Plus, it's so relaxing—like a meditation session for my face.",
      name: "Taylor B.",
      label: "LED therapy treatment (Sample)"
    }
  },

  "coolsculpt": {
    title: "CoolSculpt",
    tagline: "Freeze away fat—naturally.",
    whoFor: [
      {
        title: "Stubborn fat",
        description: "Have pockets of fat that won't budge with diet and exercise"
      },
      {
        title: "Love handles",
        description: "Want to reduce fat around your midsection or flanks"
      },
      {
        title: "Non-surgical option",
        description: "Looking to contour your body without surgery"
      },
      {
        title: "Near your goal weight",
        description: "Are close to your ideal weight but have specific problem areas"
      }
    ],
    process: [
      {
        title: "Consultation & mapping",
        description: "We assess your areas of concern and create a customized treatment plan. We'll mark the areas to be treated."
      },
      {
        title: "Application",
        description: "We place a gel pad and applicator on the treatment area. You'll feel intense cold at first, which numbs after a few minutes."
      },
      {
        title: "Treatment time",
        description: "The applicator freezes fat cells while you relax, read, or work on your phone. Each area takes 35-60 minutes."
      },
      {
        title: "Massage & completion",
        description: "We massage the treated area to enhance results. You can return to normal activities immediately."
      }
    ],
    timeline: [
      {
        title: "Day 1: No downtime",
        description: "The treated area may be red, numb, or tender, but you can resume normal activities right away. Some people experience mild cramping."
      },
      {
        title: "Weeks 1-3: Early changes",
        description: "You may notice slight changes as your body begins eliminating frozen fat cells. Be patient—the best is yet to come!"
      },
      {
        title: "Weeks 4-8: Visible reduction",
        description: "You'll see noticeable fat reduction in the treated area. Clothes fit better and your contours improve."
      },
      {
        title: "Weeks 12-16: Final results",
        description: "Results are fully visible. You'll see up to 20-25% fat reduction in treated areas. Results are permanent if you maintain your weight."
      }
    ],
    faqs: [
      {
        q: "Does CoolSculpt hurt?",
        a: "You'll feel intense cold and pulling initially, but the area goes numb quickly. Most people read, work, or nap during treatment. Post-treatment massage can be briefly uncomfortable."
      },
      {
        q: "Is it a weight loss treatment?",
        a: "No, it's fat reduction and body contouring. It's best for people near their goal weight who have stubborn pockets of fat. It's not a substitute for healthy lifestyle."
      },
      {
        q: "Are the results permanent?",
        a: "Yes! CoolSculpt kills fat cells, which are eliminated from your body permanently. However, remaining fat cells can still expand if you gain significant weight."
      },
      {
        q: "How many treatments do I need?",
        a: "It depends on your goals and the treatment area. Some people see excellent results with one session, while others benefit from 2-3 treatments per area."
      },
      {
        q: "What are the side effects?",
        a: "Common side effects include numbness, redness, swelling, and tenderness lasting a few days to weeks. Serious complications are rare."
      }
    ],
    testimonial: {
      quote: "I work out regularly but couldn't lose my love handles. After CoolSculpt, they're finally gone! My clothes fit better and I feel so much more confident. No surgery needed!",
      name: "Mike D.",
      label: "CoolSculpt treatment (Sample)"
    }
  },

  "rf-body-tightening": {
    title: "RF Body Tightening",
    tagline: "Tighten and tone without surgery—naturally.",
    whoFor: [
      {
        title: "Loose skin",
        description: "Have mild to moderate skin laxity after weight loss or aging"
      },
      {
        title: "Cellulite",
        description: "Want to smooth the appearance of cellulite"
      },
      {
        title: "Body contouring",
        description: "Looking to tighten and firm specific body areas"
      },
      {
        title: "Non-invasive lift",
        description: "Want to avoid surgery but still see tightening results"
      }
    ],
    process: [
      {
        title: "Consultation & assessment",
        description: "We evaluate your skin laxity and discuss your goals. We'll determine the best treatment areas and create a plan."
      },
      {
        title: "Preparation",
        description: "We mark the treatment area and apply gel to help the device glide smoothly over your skin."
      },
      {
        title: "RF treatment",
        description: "We use radiofrequency energy to heat deep skin layers, stimulating collagen production. You'll feel warmth during the 30-60 minute treatment."
      },
      {
        title: "Massage & completion",
        description: "We may massage the area to enhance results. You can return to normal activities immediately—no downtime."
      }
    ],
    timeline: [
      {
        title: "Day 1: Mild warmth",
        description: "Your skin may feel warm and look slightly pink, but this fades quickly. No downtime—you can go straight back to your day."
      },
      {
        title: "Weeks 2-4: Early tightening",
        description: "You'll start noticing your skin feeling firmer as collagen production begins."
      },
      {
        title: "Weeks 6-12: Visible improvement",
        description: "Skin appears tighter and smoother. Cellulite is less noticeable. Your body continues improving as collagen builds."
      },
      {
        title: "Months 3-6: Peak results",
        description: "Maximum tightening is achieved. For best results, we recommend a series of 4-6 treatments. Maintenance sessions help sustain your results."
      }
    ],
    faqs: [
      {
        q: "Does RF body tightening hurt?",
        a: "No, it's not painful. You'll feel warmth (like a hot stone massage) during treatment. Most people find it relaxing and comfortable."
      },
      {
        q: "Is this the same as skin tightening surgery?",
        a: "No, it's non-surgical and non-invasive. Results are more subtle than surgery, but there's no cutting, scarring, or recovery time."
      },
      {
        q: "How many treatments do I need?",
        a: "Most people benefit from 4-6 treatments spaced 1-2 weeks apart. We'll customize a plan based on your concerns."
      },
      {
        q: "Can it replace a tummy tuck?",
        a: "Not for severe skin laxity. RF tightening works best for mild to moderate looseness. We'll let you know if you'd be better served by surgical options."
      },
      {
        q: "How long do results last?",
        a: "Results can last 1-2 years with proper maintenance. Touch-up treatments every few months help sustain your results."
      }
    ],
    testimonial: {
      quote: "After having kids, my stomach skin was loose. RF body tightening has tightened and smoothed it so much! I feel confident in my body again without needing surgery.",
      name: "Amanda J.",
      label: "RF body tightening treatment (Sample)"
    }
  },

  "muscle-toning": {
    title: "Muscle Toning",
    tagline: "Build and sculpt muscles—effortlessly.",
    whoFor: [
      {
        title: "Weak core",
        description: "Want to strengthen and tone your abdominal muscles"
      },
      {
        title: "Flat buttocks",
        description: "Looking to lift and build your glutes"
      },
      {
        title: "Post-pregnancy",
        description: "Need help toning muscles after pregnancy"
      },
      {
        title: "Busy lifestyle",
        description: "Want to enhance your workout results without spending hours at the gym"
      }
    ],
    process: [
      {
        title: "Consultation & goals",
        description: "We discuss which muscle groups you want to target (abs, glutes, arms, etc.) and create a treatment plan."
      },
      {
        title: "Positioning & setup",
        description: "We position the paddles or applicators on the target muscles. You'll lie comfortably during treatment."
      },
      {
        title: "Muscle stimulation",
        description: "The device triggers supramaximal muscle contractions (stronger than you can achieve with exercise). Each session takes about 30 minutes."
      },
      {
        title: "Recovery",
        description: "You may feel muscle fatigue similar to an intense workout. This is normal! You can resume regular activities immediately."
      }
    ],
    timeline: [
      {
        title: "Day 1-2: Muscle soreness",
        description: "Your muscles will feel worked, similar to after a tough gym session. This means it's working!"
      },
      {
        title: "Weeks 2-4: Strength building",
        description: "You'll notice your muscles feeling stronger. Some people see early definition improvements."
      },
      {
        title: "Weeks 6-8: Visible toning",
        description: "Muscle definition becomes more apparent. Your abs, glutes, or other treated areas look more sculpted."
      },
      {
        title: "Weeks 12-16: Maximum results",
        description: "You'll see peak muscle building and fat reduction in treated areas. Most people complete a series of 4-6 sessions. Maintain with exercise and occasional touch-ups."
      }
    ],
    faqs: [
      {
        q: "Does muscle toning hurt?",
        a: "It doesn't hurt, but it feels intense—like a very strong muscle contraction. We adjust the intensity to your comfort level."
      },
      {
        q: "Is this a replacement for exercise?",
        a: "No, it's a complement to a healthy lifestyle. It helps build muscle and tone areas that are hard to target with regular workouts alone."
      },
      {
        q: "Can it give me a six-pack?",
        a: "It can strengthen and define your abs, but visible definition also depends on body fat percentage. Combining this with proper diet and exercise gives best results."
      },
      {
        q: "How many treatments do I need?",
        a: "Most people complete 4-6 sessions over 2-3 weeks for optimal results. Some do maintenance sessions every few months."
      },
      {
        q: "Who is not a good candidate?",
        a: "This isn't suitable for people with metal implants, pacemakers, or certain medical conditions. We'll assess your candidacy during consultation."
      }
    ],
    testimonial: {
      quote: "I work out regularly but could never get the ab definition I wanted. After muscle toning treatments, my core is so much stronger and more defined! It's like the boost I needed.",
      name: "Chris V.",
      label: "Muscle toning treatment (Sample)"
    }
  }
};

// Export to window for vanilla JavaScript usage
window.TREATMENT_DETAIL_DATA = TREATMENT_DETAIL_DATA;
