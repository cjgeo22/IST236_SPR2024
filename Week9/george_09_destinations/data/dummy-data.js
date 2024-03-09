import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "England", "#496322"), // olive-y green
  new Country("c2", "Sweden", "#838529"), // mustard yellow
  new Country("c3", "Germany", "#A87B2E"), // yellow-y orange
  new Country("c4", "Croatia", "#CD5932"), // red-y orange
  new Country("c5", "Russia", "#DA4E5F"), // orange-y pink
  new Country("c6", "South Korea", "#E46CA8"), // pink
  new Country("c7", "Turkey", "#ED8CE2"), // light pink
  new Country("c8", "Portugal", "#E2AEF4"), // baby pink
  new Country("c9", "Switzerland", "#DFD1FA"), // grey pink
  new Country("c10", "South Africa", "#F6F6FE"), // off-white
];
//data now includes a description that can be pulled for the modal screen
export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Manchester",
    "$1,253 / week",
    1853,
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Manchester_Town_Hall_from_Lloyd_St.jpg/1280px-Manchester_Town_Hall_from_Lloyd_St.jpg",
    "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."
  ),
  new Destination(
    "d2",
    "c1",
    "Liverpool",
    "$1,427/week",
    1207,
    4.4,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LIVERPOOL_ANGLICAN_CATHEDRAL_SEP2012_%287916053494%29.jpg/1024px-LIVERPOOL_ANGLICAN_CATHEDRAL_SEP2012_%287916053494%29.jpg",
    "Liverpool is a maritime city in northwest England, where the River Mersey meets the Irish Sea. A key trade and migration port from the 18th to the early 20th centuries, it's also, famously, the hometown of The Beatles."
  ),
  new Destination(
    "d3",
    "c2",
    "Sundsvall",
    "$1,766/week",
    1621,
    4.8,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sundsvall.jpg/1024px-Sundsvall.jpg",
    "Sundsvall is a city and the seat of Sundsvall Municipality in Västernorrland County, Sweden.  Old town in Sundsvall is known as Stenstan, meaning stone city referencing the beautiful stone buildings from late the eighteen hundreds."
  ),
  new Destination(
    "d4",
    "c2",
    "Gothenburg",
    "$1,432/week",
    1621,
    4.7,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/G%C3%B6teborg_in_moon_light.jpg/1024px-G%C3%B6teborg_in_moon_light.jpg",
    "Gothenburg, a major city in Sweden, is situated off the Göta älv river on the country's west coast. An important seaport, it's known for its Dutch-style canals and leafy boulevards like the Avenyn, the city's main thoroughfare, lined with many cafes and shops."
  ),
  new Destination(
    "d5",
    "c3",
    "Berlin",
    "$1,040/week",
    1237,
    3.9,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1920px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg",
    "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification."
  ),
  new Destination(
    "d6",
    "c3",
    "Heidelberg",
    "$2,145/week",
    1196,
    4.2,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Heidelberg_nachts.jpg/1280px-Heidelberg_nachts.jpg",
    "Heidelberg is a town on the Neckar River in southwestern Germany. It’s known for venerable Heidelberg University, founded in the 14th century. Gothic Heiliggeistkirche church towers over the cafe-lined Marktplatz, a town square in the Altstadt (Old Town)."
  ),
  new Destination(
    "d7",
    "c4",
    "Zagreb",
    "$578/week",
    1094,
    4.0,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Zagreb_%2829588612210%29.jpg/1920px-Zagreb_%2829588612210%29.jpg",
    "Zagreb, Croatia’s northwestern capital, is distinguished by its 18th- and 19th-century Austro-Hungarian architecture. At its center, Upper Town is the site of the Gothic, twin-spired Zagreb Cathedral and 13th-century St. Mark’s Church, with a colorfully tiled roof."
  ),
  new Destination(
    "d8",
    "c4",
    "Split",
    "$821/week",
    "200 BC",
    4.1,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1280px-Split_080620-133710-IMG_0968x.jpg",
    "Split, historically known as Spalato, is the second-largest city of Croatia after the capital Zagreb. An intraregional transport hub and popular tourist destination, the city is linked to the Adriatic islands and the Apennine Peninsula. More than 900,000 tourists visit Split each year. "
  ),
  new Destination(
    "d9",
    "c5",
    "Saint Petersburg",
    "$1,425/week",
    1703,
    4.2,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/RUS-2016-Aerial-SPB-Peterhof_Palace.jpg/1280px-RUS-2016-Aerial-SPB-Peterhof_Palace.jpg",
    "St. Petersburg is a Russian port city on the Baltic Sea. It was the imperial capital for 2 centuries and subject of the city's iconic “Bronze Horseman” statue. It remains Russia's cultural center, with venues such as the Mariinsky Theatre hosting opera and ballet, and the State Russian Museum showcasing Russian art."
  ),
  new Destination(
    "d10",
    "c5",
    "Yekaterinburg",
    "$1,120/week",
    1723,
    4,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/1280px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg",
    "Yekaterinburg is a city in Russia, east of the Ural Mountains. It’s known for the golden-domed Church on the Blood, built in the early 21st century on the site of the 1918 Romanov executions. The Monument to the Founders stands by the banks of the Iset River. Exhibits at the nearby Sverdlovsk Regional Local Lore Museum include the Hall of the Romanovs."
  ),
  new Destination(
    "d11",
    "c6",
    "Seoul",
    "$1,557/week",
    1394,
    4.8,
    "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/destination/South-Korea/Seoul/219740_SCN_Seoul_iStock521707831_ZC35CD/Seoul-Scenery.jpg?tr=w-780%2Ch-437%2Cfo-auto",
    "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park."
  ),
  new Destination(
    "d12",
    "c6",
    "Jeonju",
    "$915/week",
    "57 BC",
    4.9,
    "https://daydreamingtravels.com/wp-content/uploads/2022/11/DSC00986-1536x864.jpg",
    "Jeonju is a city in western South Korea. It’s known for the Jeonju Hanok Heritage Village, an area of traditional houses, craft shops and food stalls. In the village, the 15th-century Gyeonggijeon Shrine has portraits of former kings. Jeonju Korean Traditional Wine Museum demonstrates the making of local rice wines."
  ),
  new Destination(
    "d13",
    "c7",
    "Pamukkale",
    "$2,251/week",
    "200 BC",
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pamukkale_56.jpg/1280px-Pamukkale_56.jpg",
    "Pamukkale is a town in western Turkey known for the mineral-rich thermal waters flowing down white travertine terraces on a nearby hillside. It neighbors Hierapolis, an ancient Roman spa city founded around 190 B.C. Ruins there include a well-preserved theater and a necropolis with sarcophagi that stretch for 2km."
  ),
  new Destination(
    "d14",
    "c7",
    "Ankara",
    "$1,680/week",
    1923,
    4.0,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/ANKARA_KOCATEPE_CAM%C4%B0%C4%B0.jpg/1920px-ANKARA_KOCATEPE_CAM%C4%B0%C4%B0.jpg",
    "Ankara, Turkey’s cosmopolitan capital, sits in the country’s central Anatolia region. It’s a center for the performing arts, home to the State Opera and Ballet, the Presidential Symphony Orchestra and several national theater companies. Overlooking the city is Anitkabir, the enormous hilltop mausoleum of Kemal Atatürk, modern Turkey’s first president."
  ),
  new Destination(
    "d15",
    "c8",
    "Faro",
    "$1,010/week",
    "400 BC",
    4.5,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Faro_Portugal_2.jpg/1280px-Faro_Portugal_2.jpg",
    "Faro is the capital of southern Portugal’s Algarve region. The city’s neoclassical Arco da Vila is on the site of a gate that was part of the original Moorish wall. The monumental archway leads to the old town, with its cobbled streets. Nearby is Faro Cathedral, built in the 13th century. The Municipal Museum, in a 16th-century convent, displays prehistoric and medieval artifacts, plus religious art."
  ),
  new Destination(
    "d16",
    "c8",
    "Sintra",
    "$1,749/week",
    1287,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020",
    "Sintra is a resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon. A longtime royal sanctuary, its forested terrain is studded with pastel-colored villas and palaces. The Moorish- and Manueline-style Sintra National Palace is distinguished by dramatic twin chimneys and elaborate tilework. The hilltop 19th-century Pena National Palace is known for a whimsical design and sweeping views."
  ),
  new Destination(
    "d17",
    "c9",
    "Zurich",
    "$3,880/week",
    "90 CE",
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/1_zurich_panorama_grossmunster_limmat_river_2012.jpg/1920px-1_zurich_panorama_grossmunster_limmat_river_2012.jpg",
    "The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history. Waterfront promenades like the Limmatquai follow the river toward the 17th-century Rathaus (town hall)."
  ),
  new Destination(
    "d18",
    "c9",
    "Rapperswil-Jona",
    "$2,675/week",
    2007,
    4.9,
    "https://media.istockphoto.com/id/892491324/photo/colorful-houses-with-red-roofs-in-rapperswil-switzerland.jpg?s=612x612&w=0&k=20&c=sVNG1HpnFQN9orKiZnsj0oDk4L49_zo3aQVkfRzAXUc=",
    "Rapperswil-Jona is a municipality in the Wahlkreis of See-Gaster in the canton of St. Gallen in Switzerland. Rapperswil is often referred to as the 'town of roses' (Rosenstadt) because of its extensive displays of roses in three designated parks. No less than 15,000 plants of 600 different kinds may be viewed between June and October."
  ),
  new Destination(
    "d19",
    "c10",
    "Johannesburg",
    "$648/week",
    1886,
    4.5,
    "https://afar.brightspotcdn.com/dims4/default/3d33d1d/2147483647/strip/true/crop/4000x2122+0+150/resize/2880x1528!/format/webp/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fe7%2Fe7%2F776a9bd74ce7a2d716cd9b9ec717%2Fsimon-hurry-h-l45tsmgm-unsplash.jpg",
    "Johannesburg, South Africa's biggest city and capital of Gauteng province, began as a 19th-century gold-mining settlement. Its sprawling Soweto township was once home to Nelson Mandela and Desmond Tutu. Mandela’s former residence is now the Mandela House museum."
  ),
  new Destination(
    "d20",
    "c10",
    "Stellenbosch",
    "$1,251/week",
    1679,
    4.9,
    "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/08/Stellenbosch-Cabernet.png",
    "Stellenbosch is a university town in South Africa's Western Cape province. It's surrounded by the vineyards of the Cape Winelands and the mountainous nature reserves of Jonkershoek and Simonsberg. The town's oak-shaded streets are lined with cafes, boutiques and art galleries."
  ),
];
