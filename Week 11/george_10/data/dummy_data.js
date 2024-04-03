import News from "../models/News";

export const NEWSARTICLES = [
  // Article => https://www.cnn.com/2024/03/16/us/coast-guard-california-diesel-fuel-discharged-trnd/index.html
  new News(
    "n1",
    "USA",
    "Vessel ‘accidentally discharged’ 500 gallons of diesel fuel off Northern California coast, Coast Guard says",
    "March 16, 2024",
    "Taylor Romine",
    "CNN",
    "A US Coast Guard vessel “accidentally discharged” about 500 gallons of diesel fuel off the coast of Northern California, District 11 of the military branch said in a news release." +
      " The Coast Guard Cutter Alder, a 225-foot buoy tender, was on its way to Humboldt Bay Friday morning while the vessel was about 30 miles offshore from the town of Fort Bragg, the release said." +
      " Coast Guard officials said they are investigating and “evaluating potential impacts to sensitive sites” but do not expect the shoreline to be affected." +
      " “Our priority is to protect the environment and prevent any future incidents,” said Coast Guard Rear Adm. Andrew Sugimoto, commander of District 11...",
    "https://media.cnn.com/api/v1/images/stellar/prod/coast-guard-cutter-alder.jpeg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),

  // Article => https://nypost.com/2024/03/19/us-news/moment-nyc-homeowner-is-arrested-after-tense-standoff-with-squatters/
  new News(
    "n2",
    "USA",
    "Fed-up homeowner arrested after tense standoff with squatters ‘stealing’ $1M house she inherited from parents",
    "March 19, 2024",
    "Reuven Fenton, Olivia Land, and Emily Crane",
    "NEW YORK POST",
    "A New York City property owner recently ended up in handcuffs following a fiery standoff with alleged squatters who she has been trying to boot from her family’s home, tense footage shows." +
      " Adele Andaloro, 47, was nabbed after changing the locks last month on the $1 million home in Flushing, Queens, that she says she inherited from her parents when they died." +
      " “It’s enraging,” the homeowner said of the squatter saga. “It’s not fair that I, as the homeowner, have to be going through this.”" +
      " Andaloro claims the ordeal erupted when she started the process of trying to sell the home last month but realized squatters had moved in — and brazenly replaced the entire front door and locks...",
    "https://nypost.com/wp-content/uploads/sites/2/2024/03/squatter-standoff-fair-i-homeowner-78629116.jpg?quality=75&strip=all"
  ),

  // Article => https://www.usatoday.com/story/news/investigations/2024/03/19/longest-solar-eclipse-april-8-mexico/72900282007/
  new News(
    "n3",
    "USA",
    "For these extreme eclipse chasers, there's one place to be April 8: Mexico",
    "March 19, 2024",
    "Chris Kenning",
    "USA TODAY",
    "Paul Maley grew up in Texas at the height of the Space Age of the 1960s, often looking skyward. He was mesmerized by solar eclipses, including one he photographed as a young teen, its image projected on a lawn chair." +
      " Over the years, an interest in eclipses took him far beyond any Texas backyard." +
      " Today the 76-year-old is among America’s most prolific eclipse chasers. He has followed them across the globe in 42 countries such as Indonesia, Peru, Turkey and Saudi Arabia – taking him to remote villages, sandy deserts and even the icy shores of Antarctica." +
      " On April 8, the retired NASA contractor aims to notch his 84th eclipse – and 30th total eclipse – while floating in the Pacific Ocean on a ship somewhere west of Mazatlan, Mexico...",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/18/USAT/73023817007-maley-3.jpg?width=571&height=428&fit=crop&format=pjpg&auto=webp"
  ),

  // Article => https://www.nbcnews.com/news/crime-courts/us-crime-rate-still-dropping-says-fbi-rcna144100
  new News(
    "n4",
    "USA",
    "The U.S. crime rate is still dropping, FBI data shows",
    "March 19, 2024",
    "Ken Dilanian",
    "NBC NEWS",
    "New FBI data confirms previous indications that crime in the U.S. declined significantly in 2023, continuing a post-pandemic trend and belying widespread perceptions that crime is rising." +
      " The new fourth-quarter numbers showed a 13% decline in murder in 2023 from 2022, a 6% decline in reported violent crime and a 4% decline in reported property crime. That’s based on data from around 13,000 law enforcement agencies, policing about 82% of the U.S. population, that provided the FBI with data through December." +
      " “It suggests that when we get the final data in October, we will have seen likely the largest one-year decline in murder that has ever been recorded,” said Jeff Asher, a former CIA analyst who now studies crime trends...",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-03/240319-crime-rate-dropping-beg-1251p-f96a8e.jpg"
  ),

  // Article => https://www.nbcnews.com/news/us-news/chicago-begins-evicting-migrants-rcna143961
  new News(
    "n5",
    "USA",
    "Chicago begins evicting migrants from shelters as residents decry a 'lack of respect'",
    "March 18, 2024",
    "Daniella Silva",
    "NBC NEWS",
    "Chicago has begun evicting some migrants from its shelters, a controversial policy that had been delayed for months but appeared haphazard, a migrant told NBC News on Monday." +
    " Migrants who have been evicted, as well as those who face a rapidly approaching deadline, said there has been widespread confusion about the process and frustration with being forced to leave while they still lack the resources to find their own places to stay...",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-03/240318-chicago-migrants-vl-442p-22228e.jpg"
  ),

    // Article => https://www.ndtv.com/world-news/earthquake-of-5-5-magnitude-hits-pakistan-5272537
  new News(
    "n6",
    "WORLD",
    "Earthquake Of 5.5 Magnitude Hits Pakistan",
    "March 19, 2024",
    "World News | Asian News International",
    "NDTV WORLD",
    "An earthquake of 5.5 magnitude struck Pakistan in the early hours on  Wednesday, the National Centre for Seismology reported." + 
    " The earthquake occurred at 2:57 am (IST) and its depth was measured at 105 km." + 
    " 'Earthquake of Magnitude: 5.5, Occurred on 20-03-2024, 02:57:11 IST, Lat: 29.74 & Long: 65.93, Depth: 105 Km, Location: Pakistan', the National Centre of Seismology posted on social media platform X...",
    "https://i.ndtvimg.com/i/2017-09/earthquake-generic_650x400_71505899871.jpg"
  ),

  // Article => https://www.bbc.com/news/health-68609297?zephr-modal-register
  new News(
    "n7",
    "WORLD",
    "Scientists say they can cut HIV out of cells",
    "March 19, 2024",
    "Michelle Roberts",
    "BBC NEWS",
    "Scientists say they have successfully eliminated HIV from infected cells, using Nobel Prize-winning Crispr gene-editing technology." + 
    " Working like scissors, but at the molecular level, it cuts DNA so 'bad' bits can be removed or inactivated." + 
    " The hope is to ultimately be able to rid the body entirely of the virus, although much more work is needed to check it would be safe and effective...",
    "https://ichef.bbci.co.uk/news/1536/cpsprodpb/F97A/production/_132966836_capture.png.webp"
  ),

  // Article => https://abcnews.go.com/International/lawmakers-hong-kong-pass-strict-new-security-law/story?id=108273414
  new News(
    "n8",
    "WORLD",
    "Lawmakers in Hong Kong pass strict new security law",
    "March 19, 2024",
    "Britt Clennett and Karson Yiu",
    "ABC NEWS",
    "Hong Kong's legislature has unanimously passed a strict security law, 11 days after it was tabled in an unusually fast turnaround." + 
    " Authorities in Hong Kong have argued that the law is necessary to uphold stability and 'plug any holes' left by the sweeping National Security Law, which was imposed by China following widespread protests in 2019."+
    " Article 23 was mandated under Hong Kong’s mini constitution, but plans to enact it in 2003 were shelved after mass protests. This time, Hong Kong's chief executive, John Lee, made it clear the government wanted it passed with 'full speed'. Authorities in Beijing and Hong Kong have spent the last few years dismantling political opposition and stacking the legislature with only 'patriots' loyal to Beijing...",
    "https://i.abcnewsfe.com/a/59f77509-b0f0-4292-b1bb-3e04a6b4b520/Hong_Kong2-ap-ml-240319_1710859794890_hpEmbed_3x2.jpg"
  ),

  // Article => https://www.nbcnews.com/news/world/china-youth-unemployment-tinder-rcna140631
  new News(
    "n9",
    "WORLD",
    "Looking for leads, not love: Job seekers in China turn Tinder into a networking tool",
    "March 16, 2024",
    "Larissa Gao and Helen Chen",
    "NBC NEWS",
    "Young people in China facing an increasingly tough labor market are turning to an unlikely place for help in their job searches: Tinder." + 
    " Jade Liang, a master’s student in Shanghai, decided to dust off her account on the dating app after applying to more than 400 jobs online without success. She had previously used it in her search for romance, but now finds it useful to connect with fellow professionals for casual coffee chats." + 
    " “I simply swiped right on individuals in the industry I aspire to join,” which is tech, said Liang, 26, who told NBC News that she makes her intentions clear once she starts chatting with matches online and that she finds the response is generally welcoming...",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-02/240228-china-tinder-jobs-jg-58ef03.jpg"
  ),
  
  // Article => https://www.bbc.com/news/world-europe-68610123
  new News(
    "n10",
    "WORLD",
    "Magali Berdah: Dozens jailed in France's largest cyberbully case",
    "March 19, 2024",
    "Ian Casey",
    "BBC NEWS",
    "Twenty-eight people have been jailed for up to 18 months for the harassment of an influencer in France's largest cyberbullying case to date." + 
    " Judges found the accused guilty of harassing Magali Berdah, spurred on by a campaign by the French rapper Booba against 'thieving influencers'." +
    " The court in Paris heard that the harassment had 'real consequences' to Ms Berdah's mental health. Booba is facing a separate trail and denies aggravated harassment...", 
    "https://ichef.bbci.co.uk/news/1536/cpsprodpb/12792/production/_132966657_magaliberdah.jpg.webp"
  ),

  // Article => https://www.gamespot.com/articles/why-blizzard-is-overhauling-overwatch-2-to-be-more-generous/1100-6521944/
    new News(
    "n11",
    "GAME",
    "Why Blizzard Is Overhauling Overwatch 2 To Be More 'Generous'",
    "March 19, 2024",
    "Jess Cogswell",
    "GAMESPOT",
    "It's been a rocky 18 months for the Overwatch 2 team. After releasing back in 2022 to positive-yet-underwhelming reviews, scrapping the game's once-promised PvE hero mode, and, more recently, undergoing large-scale layoffs that hit core members like former lead narrative designer Gavin Jurgens-Fyhrie, there's been a bit of uncertainty in regards to what's next for the team-based shooter. However, the studio's next steps might just help get things back on track...",
    "https://www.gamespot.com/a/uploads/original/1639/16394322/4275572-4043402-4042029-notreview_overwatch2_site.jpg"
    ),

  // Article => https://www.ign.com/articles/xbox-game-pass-march-2024-wave-2-lineup-announced
  new News(
    "n12",
    "GAME",
    "Xbox Game Pass March 2024 Wave 2 Lineup Announced",
    "March 19, 2024",
    "Wesley Yin-Poole",
    "IGN",
    "Out today, March 19, is open-world farming adventure Lightyear Frontier (Game Preview) (Cloud, PC, and Xbox Series X|S) as a day-one release. IGN’s Lightyear Frontier Early Access Review returned a 7/10. We said: “Cute and chill, homesteading in your giant mech on Lightyear Frontier’s alien world is already some good and simple fun, even if it currently stops a bit short.”",
    "https://assets-prd.ignimgs.com/2024/03/14/farmingmultiplayer-1710460036407.jpg?crop=16%3A9&width=888&dpr=2"
  ),

  // Article => https://gamerant.com/genshin-impact-banner-order-change-fontaine-version-4-6/
  new News(
    "n13",
    "GAME",
    "Rumor: Genshin Impact Unexpectedly Changing Its Banner Order for Fontaine",
    "March 19, 2024",
    "Christian Miller",
    "GAMERANT",
    "A major change could be coming to the release order of upcoming Fontaine characters in Genshin Impact, as one of them may see an unfortunate delay." + 
    " Genshin Impact could be switching out one of the currently unreleased Fontaine characters in favor of Sethos, who plays a major role in Cyno's second Story Quest. A fact that has certainly rung true for the region of Fontaine is that Genshin Impact is no stranger to making decisions on the fly, especially when it concerns its gacha system – most notably, the characters that find their way onto its Event Banners. This makes banner leaks especially important to the Genshin Impact community, and players try to keep themselves informed of any emerging changes.",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/genshin-impact.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
  ),

  // Article => https://gamerant.com/world-of-warcraft-plunderstorm-rewards-mounts-pets-transmogs/
  new News(
    "n14",
    "GAME",
    "World of Warcraft Reveals Plunderstorm Rewards",
    "March 19, 2024",
    "Eric Law",
    "GAMERANT",
    "The World of Warcraft servers are officially live with Plunderstorm, bringing with it all the piratical rewards players can earn through the new game mode. By progressing through the Renown track, World of Warcraft fans can earn mounts, minions, titles, transmogs, and even Trader’s Tender...",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/world-of-warcraft-plunderstorm-rewards-renown.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
  ),
  // Article => https://gamerant.com/stardew-valley-record-high-player-count-steam-update-16/
  new News(
    "n15",
    "GAME",
    "Stardew Valley Reaches All-Time High Player Count on Steam Following Update 1.6 Release",
    "March 19, 2024",
    "Charming Holiday",
    "GAMERANT",
    "The highly-anticipated Stardew Valley Update 1.6 has released, resulting in the game achieving an all-time high player count of over 140,000 concurrent users on Steam. Patch notes for Stardew Valley Update 1.6 include a slew of new content, bug fixes, and more, and both new and returning fans have booted up in droves to enjoy the massive patch...",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/stardew-valley-update-1-6.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
    
  )
];