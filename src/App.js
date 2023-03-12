import logo from './logo.svg';
import './App.css';
import { CCarousel } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import Logo from './logo';

function App() {
  return (
    <div className='import-single-content-react-prototype-element'>
      <div className='top-bar-absolute-position'>
        <h1><Logo/></h1>
        <p className='right-content'>Developed by <a href=''>Ramazan Azimli</a></p>
      </div>
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Beautiful-landscapes-Iceland.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>CRATERS AND LAGOONS: ICELAND</h1>
          <h2>Ah Iceland, land of ice and fire and ridiculously long words that no visitor can pronounce, giving Welsh a run for its money! Iceland has a very volcanic history (there aren’t many places with black sand beaches) which has shaped a unique and beautiful landscape. But, we’re here to talk specifically about the craters and lagoons. We had to include the image above, with its surprisingly vivid colours and sweeping view into the mountains.</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Iceland-ice-caves-beautiful-landscapes.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>ICE CAVES: ICELAND</h1>
          <h2>On the subject of ice, let’s give ice a beautiful landscape point in its own right. Iceland definitely isn’t the only place you can find big expanses of ice and glaciers. However, we do know that you can walk inside the glaciers in Iceland. As if ice wasn’t beautiful enough, you can walk under a translucent blue ceiling.</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://wallpapershome.com/images/wallpapers/corona-del-mar-1920x1080-4k-5k-wallpaper-california-usa-best-beaches-6266.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>BEACHES AND COASTLINE: USA</h1>
          <h2>When people think of beautiful beaches, they’re probably thinking of long stretches of white sand that meet turquoise blue oceans. Maybe a turtle or two. But the rock formations around the coast are equally beautiful, shaped by thousands of years of waves. Because really, that’s kind of all sand is: really, really small grains of rock… mostly. Let’s not talk about the parrotfish poop (look it up).</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Beautiful-Landscapes-Danakil-Depression.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>VOLCANIC LANDSCAPES : ETHIOPIA</h1>
          <h2>Err, okay anyone would think we have a thing about volcanoes… but they do make for some very beautiful landscapes. Beautiful in the extreme kind of way. We love how nature produces these crazily vivid colours. Eat your heart out artificial food colouring! Although, you don’t want to be eating or drinking anything in made naturally in the Danakil Depression, Ethiopia. Pretty much everything is toxic.</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Fjords-of-Norway-beautiful-landscape.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>WATER: NORWAY</h1>
          <h2>There is water everywhere that there’s not land. Duh. About 70% of the Earth’s surface is covered in water (and about 60% of the human body is water, which is kind of interesting). So we reckon that water is very underrated when it comes to beautiful landscapes. Particularly big expanses of water, not just lakes or lagoons or rivers. They’re cool too, but there’s something impressive about water all the way to the horizon. It certainly gives you a bit of perspective.</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/GettyImages-813744156--1-.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>JUNGLE: COLOMBIA</h1>
          <h2>A wimba-way, a wimba-way, a…. just kidding. But the mighty jungle has many beautiful landscapes, regardless of whether there’s a sleeping lion in it. In fact, there’s probably not going to be a sleeping lion because lions don’t live in the jungle – which brings up a whole load of questions that our childhood selves need answered.</h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Beautiful-landscapes-morocco-desert.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>DESERT: MOROCCO</h1>
          <h2>The lions let us down, but the camels won’t. Once upon a time the Sahara desert was under water. Now instead of water as far as you can see, it’s sand as far as you can see. Kind of like you’ve been shrunk to the size of an ant and left in a sand pit… but without the threat of giant children. 
          Perhaps what's even more amazing than the baron, immense desert though, is the towns and human dwellings that spring up within it, such as the above Ait Benhaddou - an ancient city in Morocco.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Old-Man-of-Storr--Skye-beautiful-landscapes.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>ROCK FORMATIONS: SCOTLAND</h1>
          <h2>The strange rock formations of the Old Man of Storr on Skye creates an ethereal landscape. Maybe it reminds us of magical towers or the gates of Mordor. We’re not sure, but there’s definitely an edge of fantasy to pillars of rock. Or perhaps the location scouts for fantasy films are just creating a self-propagating circle.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://www.muchbetteradventures.com/magazine/content/images/2021/06/Beautiful-Landscapes-Slovenia.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>FOREST: SLOVENIA</h1>
          <h2>Okay, yes, we could have picked any number of forests. There’s something beautiful about deciduous trees changing colour with the seasons. It’s like seeing autumn happen in front of you. The forests of Slovenia are gorgeous in autumn and we learnt that first hand on a team trip to Slovenia. Even if your adventure doesn’t go 100% to plan, you can still enjoy being in nature.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60595e75c685cfec854722a8/master/w_2580%2Cc_limit/Azores-GettyImages-1183442594.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>The Azores: Portugal</h1>
          <h2>Roughly 900 miles off the coast of Lisbon, this Portuguese archipelago can inspire wanderlust with a single photo. The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring. Just make sure you visit before everyone you know beats you to it.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60596bca7ef97a43a1af2c99/master/w_2580%2Cc_limit/Kilimanjaro-GettyImages-1249566598.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Mount Kilimanjaro: Tanzania</h1>
          <h2>Africa’s highest peak seems more striking than a lot of other famous mountains, because it’s an ancient stratovolcano that’s not part of any mountain range. That means the 19,000-foot summit drops down to vast, flat plains on all sides, making it a mirage-like blip on Tanzania’s widespread topography. As an added bonus, the peak requires no technical mountaineering skills to summit, so even novice hikers can cross this item off their bucket list.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a5211a45eb1f830373c/master/w_2580%2Cc_limit/Wulingyuan-Scenic-Area-China_GettyImages-159228516.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Wulingyuan Scenic Area: China</h1>
          <h2>“Scenic’ might be an understatement here: This 100-square-mile attraction in China’s Hunan Province contains thousands of sandstone pillars that are nature’s version of skyscrapers—some even stretch taller than the Empire State Building’s midpoint.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a091a7e70293bf7094b/master/w_2580%2Cc_limit/Arashiyama-Japan_GettyImages-687644524.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Arashiyama Bamboo Grove: Japan</h1>
          <h2>Every traveler should experience the ethereal glow and seemingly endless heights of this bamboo grove on the outskirts of Kyoto. The experience even extends beyond the visual realm: In 1996, Japan’s Ministry of the Environment included the sounds here—wood creaking, leaves rustling—as one of the top 100 Soundscapes of Japan.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a087b743b350a60a8d9/master/w_2580%2Cc_limit/Antarctica-_GettyImages-148815908.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Antarctica</h1>
          <h2>That’s right, we put an entire continent on here. Although 99 percent of Antarctica is covered with ice, the landscape still manages to be stunningly diverse—surreal blue glaciers, active volcanoes, the rough waterways of the Drake Passage, and 360-degree views of untouched snow. And those views are made even better when an emperor penguin or humpback whale makes an appearance.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a2b1a7e7018aef70957/master/w_2580%2Cc_limit/Na-Pali-Coast_GettyImages-1124504102.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Na Pali Coast: Hawaii</h1>
          <h2>Kauai has one of the world’s most gorgeous coastlines, with towering waterfalls and isolated crescent beaches. Just be prepared to put in a little effort to soak up its wonders: Na Pali can only be seen from a helicopter, catamaran, or a rather grueling hike.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a2d7b743ba94b60a8e0/master/w_2580%2Cc_limit/Namib-Desert%2C-Namibia_GettyImages-139814922.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Namib Desert: Namibia</h1>
          <h2>With its otherworldly landscapes and isolated luxury lodges—not to mention populations of rhinos, giraffes, and elephants—Namibia is like nowhere else on Earth. In fact, its red sand dunes and skeletal trees might make you think you’ve been transported to Mars instead of Southwest Africa.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60596df48f4452dac88c59fe/master/w_2580%2Cc_limit/Reynisfjara-GettyImages-1004089860.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Reynisfjara:  Iceland</h1>
          <h2>If the moon had a shoreline, it would probably look something like Reynisfjara. Just a 20-minute drive from Vik in southern Iceland, jet-black sand and spectacularly shaped basalt columns make this beach one of the most impressive sites in an already impressive country.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5e9929655cd3cb0009ca962f/master/w_2580%2Cc_limit/Capri-Italy-GettyImages-629642461.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Capri: Italy</h1>
          <h2>Few parts of the world can claim such a range of natural beauty as Italy, with craggy peaks and verdant hills to turquoise waters lined by white-sand beaches. But the island of Capri easily numbers among the most gorgeous (and most glamorous) spots in the country.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/605961ae7b588da524cfef44/master/w_2580%2Cc_limit/Cappadocia-GettyImages-166186583.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Cappadocia: Turkey</h1>
          <h2>Cappadocia, an area in Turkey where entire cities have been carved into rock, is pretty incredible on its own. But whenever hot air balloons pepper the sky—with many floating up right at sunrise—its beauty level literally skyrockets.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a087b743b471660a8da/master/w_2580%2Cc_limit/Angel-Falls-Venezuela_GettyImages-165513023.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Angel Falls: Venezuela</h1>
          <h2>Venezuela overflows with natural wonders, including the world’s highest waterfall: the 3,212-foot cascades of Angel Falls, located in the UNESCO-protected Canaima National Park. Canaima is by far the country’s most popular attraction, and the falls stretch an astounding 19 times higher than Niagara Falls. Bonus: Pixar animators used the location as inspiration for Paradise Falls in Up—so you know it’s good.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5e45b1e6927f820008dcc711/master/w_2580%2Cc_limit/Galapagos%2520GettyImages-470028282.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Galápagos Islands: Ecuador</h1>
          <h2>Do we really have to explain the allure of the Galápagos? If you can, make it a priority to visit this of-another-time stretch of Ecuador, with dinosaur-like giant tortoises lumbering through the tall grass and real-life blue-footed boobies. (Pro tip: A cruise is definitely the preferred way to explore the islands; Celebrity Cruise’s Xpedition ferries just 100 passengers and holds nightly lectures by naturalists from Galápagos National Park.)
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a163bf1dc1649de9aab/master/w_2580%2Cc_limit/Cliffs-of-Moher-Ireland_GettyImages-165186543.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Cliffs of Moher: Ireland</h1>
          <h2>Few places exemplify the raw, untamed beauty of Ireland’s west coast like this natural wonder, which tops 702 feet at the highest point. And while you might know them better as the Cliffs of Insanity from The Princess Bride, in reality, the cliffs are located just south of Galway.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5e45b1d6a007f90008d5bb0d/master/w_2580%2Cc_limit/Great%2520Barrier%2520Reef%2520GettyImages-157400772.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>The Great Barrier Reef: Australia</h1>
          <h2>Although the Great Barrier Reef (aka the largest living thing on Earth) can be seen from space, the best vantage point belongs to the avid snorkelers and scuba divers who visit each year. If you must resurface, do it at the Whitsundays—namely Whitehaven Beach, often considered to be one of the world’s most beautiful beaches.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a18070025530388fa35/master/w_2580%2Cc_limit/Grand-Canyon-AZ_GettyImages-697996602.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>The Grand Canyon: Arizona</h1>
          <h2>Grand Canyon National Park, often called one of the Seven Natural Wonders of the World, is on most travelers’ lists for a reason. Plan to hike some of the park’s most scenic loops—like Horseshoe Bend and the South Rim Trail—to get views of the rocky badlands of the Painted Desert, Navajo Nation, and even a waterfall or two.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a273bf1dc125ade9aaf/master/w_2580%2Cc_limit/Machu-Picchu-Peru_GettyImages-109401484.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Machu Picchu: Peru</h1>
          <h2>While the intricate stone ruins of Machu Picchu are the work of 15th-century Incans, the site’s natural setting makes it even more alluring. Perched atop the flattened peak of a mountain, the ancient Wonder of the World benefits from the famous backdrop of Huayna Picchu, lush green surfaces, and a barrier of Andean peaks that, despite the landmark’s fame, makes you feel like you've stumbled upon a secret.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/master/w_2580%2Cc_limit/MtFuji-GettyImages-959111140.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Mount Fuji: Japan</h1>
          <h2>It’s hard to pick the single most beautiful place in Japan, but 12,388-foot Mount Fuji just might take the prize. Visit Lake Kawaguchiko in the spring for some of the best views of the mountain and cherry blossom trees—a postcard-worthy sight if we ever saw one. Or if you’re an avid hiker, plan a trip for mid-July until the end of August, when the snow melts enough to allow access to Fuji’s summit.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cf8303b6640e7d3bee1d186/master/w_2580%2Cc_limit/Amazon_manaus_GettyImages-935746242.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>The Amazon: Brazil</h1>
          <h2>Covering roughly 40 percent of South America, including parts of Brazil, Peru, and Colombia, the Amazon is the largest rainforest on the planet, and home to more than 40,000 plant species and 1,300 bird species alone. But be sure to visit the winding rivers and diverse wildlife while you can—climate change (along with man-made fires) is increasingly whittling away the habitat every day.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60596ee5f490bda87b43e0ab/master/w_2580%2Cc_limit/Serengeti-GettyImages-155605019.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Serengeti National Park: Tanzania</h1>
          <h2>Tanzania’s portion of the Serengeti is the ideal location for an African adventure. Visit between January and March to witness the wonder that is the Great Migration, an iconic phenomenon that sees 1.5 million wildebeest sweep through East Africa on an annual, 1,200-mile cycle.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/61b9ce334dff55cd8434f7ab/master/w_2580%2Cc_limit/Salar-de-Uyuni-Bolivia-GettyImages-465844068.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Salar de Uyuni: Bolivia</h1>
          <h2>Southwest Bolivia’s Salar de Uyuni is the largest salt flat in the world, and is about as surreal as landscapes come. When dry, the flat is a sheet of blindingly white salt tiles. During the wet season, the shallow lake mirrors the sky, creating a dreamy illusion of infinity.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5eb4171df52f4c0911cac292/master/w_2580%2Cc_limit/Sequoia-National-Park-GettyImages-131984902.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Sequoia National Park: California</h1>
          <h2>This central-Californian park is home to some 8,000 colossal sequoia trees—the gentle giants of the tree world. “General Sherman,” a tree named for the Civil War general, is the hero of these treasured acres: It stands 275 feet tall and 25 feet wide, making it the largest known single-stem tree on the planet.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/60596f6a8f4452dac88c5a00/master/w_2580%2Cc_limit/TorresDelPaine-GettyImages-518041239.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Torres del Paine National Park: Chile</h1>
          <h2>With its granite pillars, azure lakes, and steppes spotted with grazing guanacos, Torres del Paine is one of the most impressive sites in the entire Southern Hemisphere. It also happens to be an extremely popular destination for hikers: The ultra-ambitious can travel the Full Circuit—crossing the entire park—in nine days.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a4c1a7e7050e8f70959/master/w_2580%2Cc_limit/Socotra-Yemen_GettyImages-487703989.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Socotra: Yemen</h1>
          <h2>Nearly 350 miles off the southern coast of Yemen, Socotra has both the remoteness and surrealism of a distant planet. The UFO-like dragon’s blood trees are the island’s most notable feature—we dare you to find those in your neighborhood park.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/628fe0c195fdcf29752f5136/master/w_2580%2Cc_limit/Palawan-GettyImages-985553596.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Palawan: Philippines</h1>
          <h2>With its blue lagoons and limestone cliffs, it’s easy to see why Palawan was voted one of the best islands in the world by our readers. It is also home to the otherworldly Puerto Princesa Subterranean River, a UNESCO World Heritage Site that travels five miles through an underground cave system.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a516b5c4dca7b5ec156/master/w_2580%2Cc_limit/Victoria-Falls-Zambia-Zimbabwe_GettyImages-507449285.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Victoria Falls: Zambia and Zimbabwe</h1>
          <h2>Nothing compares to standing in front of the world’s largest waterfall, which stretches in length for a full mile. Visit between February and May (after the region’s rainy season) for the clearest views of the 500 million liters of water that pour over the falls every 60 seconds.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cfe88223b3fd43b601e4aab/master/w_2580%2Cc_limit/Reine%2C-Lofoten-Islands_GettyImages-668757185.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>The Lofoten Islands: Norway</h1>
          <h2>Located 800 miles from Oslo and 95 miles north of the Arctic Circle, the Lofoten archipelago is known for its remote, rugged beauty. Here you’ll find clear blue waters that rival the Mediterranean, craggy mountains that rival Iceland, and enough edgy museums and fishing villages to rival...well, just about anywhere in Scandinavia.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63e5611a45ee15630373e/master/w_2580%2Cc_limit/Baobabs_GettyImages-889836156.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Avenue of the Baobabs: Madagascar</h1>
          <h2>Separated from continental Africa by 250 miles of water, Madagascar is adventure personified. The island nation’s secrets include giant moths, bug-eyed lemurs, and places like the surreal Avenue of the Baobabs, where the centuries-old trees reach heights of nearly 100 feet.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5c1aa572a546ef283d217353/master/w_2580%2Cc_limit/Halong-Bay_GettyImages-111646837.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Ha Long Bay: Vietnam</h1>
          <h2>Ha Long Bay, located in northeast Vietnam, is beloved for its blue waters and spread of limestone islands, all occupied by tropical trees and wildlife. Board a Chinese junk boat to experience the beauty (and associated myths and stories) of the mist-shrouded emerald basin for yourself.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5eb1cde0e053a5e6f0fd0c06/master/w_2580%2Cc_limit/Laguna-Colorada-GettyImages-577296437.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Laguna Colorada: Bolivia</h1>
          <h2>About a three-hour drive north of Chile’s San Pedro de Atacama, this salt lake in the shadow of the Andes is known for its blood-red waters—the result of algae that thrive in extreme heat. Flamingos (and the lake) look their best from December to April: That’s when the lake is full of water, making it more reflective for photos, and the birds are breeding. Be sure to try and catch the lake at sunset, when it’s at its reddest.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a0bc131b962ade953ad/master/w_2580%2Cc_limit/Banff-Canada_GettyImages-680900749.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Banff National Park: Canada</h1>
          <h2>Easily one of the most beautiful spots in Canada, Banff National Park overwhelms with views of the Canadian Rockies and a regular cast of animals. The park is also known for its abundance of beautiful lakes, including Lake Louise, Moraine Lake, and glacial Lake Minnewanka—each more pristine than the last.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5ea9df9752e4f366e67c3de7/master/w_2580%2Cc_limit/Namaqualand-wildflowers-GettyImages-603902648.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Namaqualand: South Africa</h1>
          <h2>Namaqualand, a region spanning South Africa’s Northern Cape Province and the Namibian border, is known for its wildflowers, which usually bloom in the desert around August and September. Even if you miss that colorful window, the evergreen plants and mountains looming in the distance—not to mention the occasional antelope sighting—make Namaqualand a year-round destination.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/628fd7349febef1a2422785f/master/w_2580%2Cc_limit/Monteverde-Costa-Rica-GettyImages-467010064.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Monteverde Cloud Forest: Costa Rica</h1>
          <h2>Costa Rica is known for its biodiversity, and the Monteverde Cloud Forest Reserve alone acts as proof. Reptiles, migratory birds, and bats, plus the highest diversity of orchids in the world (more than 500 known species) fill this nearly 26,000-acre region northwest of the capital of San José.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="https://media.cntraveler.com/photos/5cb63a516b5c4d33c25ec158/master/w_2580%2Cc_limit/Zakynthos-Greece_GettyImages-626977447.jpg" alt="landscape" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>Zakynthos: Greece</h1>
          <h2>Far less crowded than sister islands Mykonos and Santorini, Zakynthos has some of the most beautiful beaches in the Greek Isles—namely, Navagio Beach. Sheltered by cliffs, Navagio is only accessible by boat, and draws its name (“Shipwreck”) from a freighter that ran aground, was abandoned, and still rests in the beach’s white sands today.
          </h2>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  </div>
  );
}

export default App;
