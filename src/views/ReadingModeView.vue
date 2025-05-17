<script setup>
import { ref, computed } from 'vue'

// --- State ---
const isDrawerOpen = ref(false) // Controls drawer visibility

// BUTTON FOR BOOKMARK, FAVORITE AND DOWNLOAD
const isFavoriteActive = ref(false) // For the heart button
const isBookmarkActive = ref(false)
const isDownloaded = ref(false)

function toggleFavorite() {
  isFavoriteActive.value = !isFavoriteActive.value
  // TODO: Add logic here to actually save/update the favorite status
  console.log('Favorite toggled:', isFavoriteActive.value)
}

function toggleBookmark() {
  isBookmarkActive.value = !isBookmarkActive.value
  // TODO: Add logic here to save/update the bookmark status
  console.log('Bookmark toggled:', isBookmarkActive.value)
}

function handleDownload() {
  isDownloaded.value = !isDownloaded.value
  console.log('Download toggled:', isDownloaded.value)
}

// --- Chapter Data ---
const chapters = ref([
  {
    id: 1,
    title: 'Chapter 1: The Return',
    mainText:
      'The bus hissed as it came to a stop, its brakes releasing a sigh that echoed Emma’s own as she stepped onto the cracked pavement of Greyhaven’s main street.\nTen years hadn’t changed the salty scent of the sea or the way the breeze tugged at her coat, playful and familiar. \nThe town looked the same—chipped paint on storefronts, flower boxes clinging to life, and that ever-present fog curling at the edges of the cliffs. \nShe pulled her duffel strap tighter over her shoulder and took a long breath. Home.\n“Emma Hayes?” a voice called out. \nShe turned, blinking against the sunlight. \nA tall woman with wild curls and a familiar smirk approached her with arms outstretched. \n“God, I thought it was you!” \nIt was Marley Quinn, her best friend in high school and apparently, still impossible to miss.\nEmma smiled, a little hesitant. \n“Hey, Marley.” \n“You look like someone who just walked out of a city magazine,” Marley said, looping her arm through Emma’s and steering her toward a waiting car. \n“Still allergic to texting people before you show up, huh?” \nInside the car, Marley kept talking—about the bakery closing, the new mayor who was definitely crooked, and how Noah never really left town. \nThat last name sat between them like a dropped stone, causing Emma to glance out the window, jaw tightening. \nShe hadn’t told Marley the real reason she was back. \nNot yet. \nAs the coastline rolled by, and the sky darkened just a touch with approaching clouds, Emma wondered if returning was brave—or foolish.',
  },
  {
    id: 2,
    title: 'Chapter 2: Echoes of Home',
    mainText: `The morning mist clung to the cobblestone streets of Greyhaven as Emma stepped out of the inn, hands tucked into the sleeves of her knit cardigan. \nThe scent of salt and wet sand filled her lungs—sharper than she remembered. \nA gull cried above, circling lazily before disappearing behind the weathered rooftop of Finch’s Market. \nThe familiarity pressed into her chest like a weight and a balm all at once. \nShe walked the main road slowly, glancing at each storefront like she was flipping through the pages of an old photo album. \nThe bakery still had hand-painted signs, and the glass display was fogged from the warmth inside. \nGod, do they still make cinnamon knots on Thursdays? she wondered. \nThe air stirred with memories. \nShe hesitated at the corner, eyes drawn toward the dockside café.

\n"Emma?" a voice called from behind. \nShe turned. \nA woman in her early thirties, apron flour-dusted and hair piled in a loose bun, stood in the bakery doorway. \nEmma squinted. \n“Grace?” she asked, stepping forward.

\n"Grace Nichols now," the woman grinned. \n"Married Marcus—remember him? He used to trip over everything in gym class." \nShe rushed forward and embraced Emma tightly. \n“I can’t believe it. Ten years, Em. You vanished.” \nEmma gave a soft, guarded laugh. \n“Yeah, I did. It was...complicated.” \nGrace stepped back, eyes searching Emma’s. \n“Everyone thought you left because of Noah. You know he never really—well. That’s none of my business.” \nShe bit her lip, suddenly self-conscious. \n“Come on in. You want a coffee?”

\nInside, the bakery smelled like melted sugar and rising dough. \nA few regulars looked up from their booths, eyebrows raised. \nEmma felt their eyes stick like gum to the soles of her shoes. \nGrace noticed too. \n“Ignore them. \nSmall towns are big on memories,” she said, setting down a steaming mug.

\nEmma wrapped her hands around the cup. \n“It’s like nothing has changed. \nBut everything feels…off. \nLike I’m walking through a dream that isn’t mine anymore.”

\nGrace nodded slowly. \n“That’s how it goes. You leave, time moves different here. Slower, but deeper. People stay stuck in the year you left.” \nShe paused. \n“Especially Noah.”

\nEmma’s fingers tightened around the mug. \nShe didn’t reply.`,
  },
  {
    id: 3,
    title: 'Chapter 3: First Sight',
    mainText: `The afternoon sun cast long shadows across Main Street as Emma stepped out of the bakery, the warmth of cinnamon still lingering on her skin. \nHer nerves buzzed beneath her calm exterior—too many memories stirred up in too short a time. \nShe walked aimlessly, letting her feet guide her past the bookstore, the barber shop, and finally to the narrow alley that led to the town's only grocery store.

\nInside, the air was cool and humming with fluorescent lights. \nThe same crooked “Weekly Deals” board hung by the entrance, still misspelled—“banannas” with two N’s. \nEmma smiled faintly. \nShe grabbed a basket and wandered into the produce section, absentmindedly picking up a bruised apple, then putting it back. \nShe wasn’t hungry. \nShe was stalling.

\nShe was rounding the corner near the dairy aisle when she froze.

\nNoah.

\nHe was standing in front of the refrigerator door, examining a carton of milk like it held all the answers in the world. \nHis hair was shorter now, darker, as if the sun had stopped touching him. \nA few days' stubble clung to his jaw, and he had that familiar way of leaning slightly to one side, weight resting on his left leg. \nTime hadn’t erased him—it had sharpened him.

\nEmma’s heart stuttered. \nShe instinctively took a step back, but her basket hit the metal edge of a display shelf. \nThe sound echoed louder than it should have.

\nNoah turned.

\nFor a heartbeat, neither of them spoke. \nHis gaze locked with hers, unreadable. \nThe corners of his mouth didn’t move. \nHis eyes, that deep shade of sea-glass green, blinked slowly—as if confirming she wasn’t a ghost.

\n“Emma,” he said at last, low and even.

\nHer voice caught in her throat. \n“Hi.”

\nA silence stretched between them, taut as fishing line. \nHe took a small step forward, still holding the milk. \n“Didn’t think I’d see you in here.”

\nShe swallowed. \n“I didn’t think I’d be here.”

\nA flicker of something passed through his eyes—pain, maybe, or disbelief. \n“You staying long?”

\n“I don’t know yet,” she said, trying to keep her voice steady.

Noah nodded slowly, then turned away, placing the milk back in the fridge like it had suddenly gone sour. \n“Well… welcome home.” \nHe didn’t wait for her response. \nJust walked past, the space between them suddenly full of everything they hadn’t said.`, // Keep your content here
  },
  {
    id: 4,
    title: 'Chapter 4: Letters Never Sent',
    mainText: `\nRain tapped lightly against the windowpane of the small room Emma had rented at the Greyhaven Inn. \nShe sat cross-legged on the bed, a weathered shoebox resting on her lap. \nShe hadn’t meant to find it—it had been tucked into the back of her suitcase, stashed away in an old hoodie from college she’d grabbed last minute. \nBut now, it stared up at her like a dare.

\nShe opened the lid.

\nInside were envelopes, all addressed to Noah. \nNone had stamps. \nNone had been sent. \nEmma picked one at random, unfolding the paper slowly, like it might crumble. \nThe ink had faded slightly, but her words were clear—raw, unfinished pieces of a heart she thought she’d buried.

\n“I’m sorry for walking away without telling you. \nI thought if I stayed, I’d never leave. \nAnd I needed to leave.”

\nEmma closed her eyes. \nHer younger self bled through those words—desperate, guilty, confused. \nShe remembered writing that letter at 3 a.m. in a university dorm room, trying not to cry loud enough to wake her roommate.

\nThere was another one. \nNo date. \nJust his name scrawled on the front in hurried pen.

\n“You kissed me by the seawall and I thought that meant forever.
\nBut then your silence scared me.
\nAnd my father’s drinking. \nAnd everything I didn’t know how to fix.”

\nShe exhaled shakily and folded the letter back up.

\nA knock on the door startled her. \nEmma jumped, quickly shoving the letters back into the box and sliding it under the bed. \nShe opened the door to find Mrs. Callahan, the innkeeper, holding a towel and a fresh pair of sheets.

\n“Storm’s rolling in sooner than expected,” \nMrs. Callahan said, her voice calm but knowing. \n“Better make sure your windows are latched. Power tends to go out with the first real gust.”

\nEmma nodded. \n“Thanks. I’ll check them.”

\nMrs. Callahan lingered, her eyes kind but sharp. \n“You alright, dear? You’ve looked like you’re chasing ghosts since you arrived.”

\nEmma offered a strained smile. \n“Maybe I am.”

\nAfter the door shut, Emma sat back on the bed, staring at the window streaked with early rain. \nShe thought of Noah’s face in the grocery store—how it hadn’t hardened like she feared, but hadn’t softened either. \nSomewhere in those letters were all the things she hadn’t said. \nBut none of them prepared her for what might come next.


`, // Keep your content here
  },
  {
    id: 5,
    title: 'Chapter 5: Storm Warning',
    mainText: `Greyhaven’s horizon darkened with a brooding sky as Emma made her way to the pier. \nWind whipped strands of hair into her eyes, and the sea churned louder than usual—an audible warning from nature itself. \nThe annual pre-storm bonfire was still happening, despite the weather. \nBecause in Greyhaven, tradition clung as tightly as the salt in the air.

\nThe beach was already dotted with familiar faces gathered around the growing flames. \nChildren chased each other with sparklers while adults sipped from thermoses, telling stories louder than the wind. \nEmma stood at the edge of it all, the outsider who used to belong.

\n“Didn’t expect you here,” came a voice beside her.

\nShe turned. \nNoah stood a few feet away, hands buried in his jacket pockets, eyes on the fire. \nHis presence didn’t startle her—it grounded her, somehow.

\n“I wasn’t sure I’d come,” Emma admitted. \n“But I guess I missed the fire. And the company.”

\nNoah gave a soft huff. \n“You missed the company, huh? Even after all these years?”

\nThere was no accusation in his tone, just quiet curiosity. \nShe glanced at him. \n“I missed a lot of things. You more than most.”

\nHe didn’t answer at first. \nJust looked at her, really looked. \n“So why now? Why after all this time?”

\nThe fire popped loudly, sending embers into the sky. \nEmma stared into it. \n“Because running only ever took me so far. \nAnd I couldn’t outrun the past forever.”`,
  },
  {
    id: 6,
    title: 'Chapter 6: Sparks and Silence',
    mainText: `The bonfire crackled on as the sun sank behind thickening clouds. \nEmma and Noah stood apart from the others, caught in the pull of a conversation that was just beginning to unbury itself.

\n“You look like you’ve been carrying something heavy,” Noah said finally.

\nEmma nodded, eyes on the fire. \n“I left because I thought that’s what I needed to grow. \nTo be someone different. \nBut I ended up just being someone lonely.”

\nNoah’s jaw tensed. \n“You could’ve told me. I would’ve understood.”

\n“I didn’t think you would,” she whispered. \n“Back then… you stopped saying things, Noah. \nAfter my mom died, and my dad—he started drinking worse. \nI felt like I was drowning, and you didn’t even see it.”

\nHe took a step closer. \n“I did see it. I just didn’t know how to help without losing you.”

\nEmma looked up at him, her voice trembling. \n“But you lost me anyway.”

\nThe silence between them wasn’t empty—it was thick with memory. \nThen, without warning, thunder rumbled over the sea, long and low.

\nNoah looked toward the sky. \n“Storm’s coming sooner than they said. You should get inside.”

\nEmma nodded but didn’t move. \nNeither did he.`,
  },
  {
    id: 7,
    title: 'Chapter 7: The Calm Before',
    mainText: `The next day, the town hunkered down. \nWind battered windows, and the shoreline overflowed onto the boardwalk. \nEmma stayed at the inn, pacing. \nThe storm outside mirrored the one inside her—restless, unresolved.

\nShe called her father. \nThe line rang six times before clicking to voicemail. \nShe didn’t leave a message.

\nRestless, she walked to her childhood home on Harbor Lane. \nThe windows were dark, and the porch sagged more than she remembered. \nShe knocked. \nAfter a long pause, the door opened.

\nHer father stood there, older, greyer, a glass in his hand even now.

\n“You’re back,” he said, voice gravelly.

\nEmma swallowed hard. \n“Just for a while.”

\nHe opened the door farther. \n“You can come in. If you want.”

\nInside, the house smelled like dust and salt and silence. \nThey sat in the same room where arguments used to echo through the floorboards.

\n“You blamed me for her death,” he said quietly. \n“Maybe I did too.”

\nEmma didn’t deny it. \n“We both needed someone to blame. But I needed you, and you weren’t there.”

\nHe looked at her, eyes glassy. \n“I wasn’t ready to be someone’s anchor. Still not.”

\nEmma nodded slowly. \n“I didn’t come back for you. But maybe… maybe we both needed to say that.”`,
  },
  {
    id: 8,
    title: 'Chapter 8: When the Rain Falls',
    mainText: `The power went out just after sunset. \nEmma lit a candle and stared out at the raging sea from her inn window. \nThen her phone buzzed—Noah: "Shelter’s opening at the rec center. You coming?"

\nShe texted back: Already on my way.

\nThe streets were soaked, but the shelter buzzed with quiet urgency. \nCots lined the gym floor, and people passed out blankets and hot tea. \nEmma found Noah in the corner, helping an elderly man settle in.

\nWhen he saw her, he offered a tired smile. \n“Thought you’d hole up in that inn.”

\n“Didn’t want to be alone,” she said.

\nLater, they sat on cots side by side. \nThe storm pounded the roof like a drumbeat.

\nEmma turned to him. \n“Do you ever regret not chasing after me?”

\nHe hesitated. \n“Every day. But I also thought… maybe you didn’t want to be found.”

\n“I wasn’t sure I did. But I think part of me hoped you would try.”

\nHe reached out, brushing her hand with his. \n“I’m trying now.”`,
  },
  {
    id: 9,
    title: 'Chapter 9: Storm Warning',
    mainText: `By morning, the storm had passed. \nGreyhaven was wet and windblown, but still standing. \nThe town emerged like something reborn—quiet, tentative, grateful.

\nEmma walked the beach with Noah, boots sinking into the wet sand. \nDebris littered the shore—branches, broken planks, someone’s sandal.

\n“I used to think this place would never change,” Emma said. \n“But maybe it just waited for me to change first.”

\nNoah glanced at her. \n“You think you’re staying this time?”

\n“I don’t know yet,” she admitted. \n“But I’m not running.”

\nThey walked in silence, waves lapping at their feet.

\nNoah finally said, “I kept every letter you wrote me.”

\nShe stopped. \n“You never got them. I never sent them.”

\nHe smiled softly. \n“I know. But I wrote my own. Just never had an address.”

\nShe reached for his hand. \nThis time, he didn’t let go.`,
  },
  {
    id: 10,
    title: 'Chapter 10: Storm Warning',
    mainText: `A week passed. \nThe town returned to its rhythm—repairing, rebuilding, remembering. \nEmma sat on the porch of the inn, coffee in hand, watching the sky lighten above the horizon.

\nGrace pulled up in her car. \n“Thought I’d find you here.”

\nEmma smiled. \n“Thinking of moving back. Maybe even fixing up the old house.”

\nGrace grinned. \n“Good. We’ve missed you. Some more than others.”

\nAfter she left, Emma took out the last of the letters. \nShe walked to the seawall where Noah had first kissed her ten years ago. \nThe wind was softer now.

\nShe tore the letter open and let the paper fly into the ocean breeze.

\nThe past was written. \nBut the rest of the story? That was hers to tell.`,
  },
])

const selectedChapterId = ref(chapters.value.length > 0 ? chapters.value[0].id : null)

// --- Computed Property ---
const currentChapter = computed(() => {
  return chapters.value.find((chapter) => chapter.id === selectedChapterId.value) || null
})

// --- Methods ---
function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

function closeDrawer() {
  isDrawerOpen.value = false
}

function selectChapterAndClose(chapterId) {
  selectedChapterId.value = chapterId
  closeDrawer() // Close the drawer after selecting a chapter
  // Optional: Scroll content to top
  // const contentArea = document.querySelector('.chapter-content-main');
  // if (contentArea) contentArea.scrollTop = 0;
}
</script>
<template>
  <div class="container-fluid">
    <div class="chapter-reader-container">
      <div class="top-nav-actions">
        <RouterLink to="/" class="nav-action-item">
          <i class="bi bi-arrow-left"></i>
        </RouterLink>

        <button type="button" class="nav-action-item menu-toggle-btn" @click="toggleDrawer">
          <i class="bi bi-text-right"></i>
        </button>
      </div>

      <div class="container">
        <div class="chapter-drawer" :class="{ open: isDrawerOpen }">
          <div class="drawer-header mt-5 align-items-center d-flex flex-column">
            <img class="img-story mb-2" src="/src/assets/image/beforeTheRain.png" width="80px" />

            <div class="text-center">
              <h5 class="name-story fw-bold">Before the Rain</h5>
              <p class="mb-0 name-story">by Sarah Johnson</p>
            </div>
            <div class="d-flex flex-row justify-content-between gap-3 button-chaps mt-3">
              <button @click="toggleFavorite">
                <i :class="isFavoriteActive ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
              </button>

              <button @click="toggleBookmark">
                <i :class="isBookmarkActive ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'"></i>
              </button>

              <button @click="handleDownload">
                <i :class="isDownloaded ? 'bi bi-check2-circle' : 'bi bi-download'"></i>
              </button>

              <div>
                <button class="button-set">
                  <i class="bi bi-gear"></i>
                </button>
              </div>
            </div>
          </div>
          <ul class="chapter-menu-list">
            <li
              v-for="chapter in chapters"
              :key="chapter.id"
              :class="{ active: chapter.id === selectedChapterId }"
              @click="selectChapterAndClose(chapter.id)"
            >
              {{ chapter.title }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container-fluid">
        <div class="chapter-reader-container">
          <div class="container-fluid">
            <div class="chapter-content-main mt-5">
              <h2 v-if="currentChapter" class="justify-content-center text-center story-title">
                {{ currentChapter.title }}
              </h2>
              <div v-if="currentChapter" class="story-text mt-3">
                <p
                  v-for="(paragraph, index) in (currentChapter.mainText || '').split('\n')"
                  :key="index"
                >
                  {{ paragraph }}
                </p>
              </div>
              <div v-else>
                <p>Select a chapter from the menu to start reading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-reader-container {
  position: relative;
  width: 100%;
  min-height: 80vh;
  overflow-x: hidden;
}

.menu-toggle-btn {
  position: fixed;
  top: 15px;
  /* Move button to the right */
  right: 15px;
  left: auto; /* Ensure right positioning takes precedence */
  z-index: 1051; /* Keep higher than drawer */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.menu-toggle-btn i {
  font-size: 1.2rem;
}

/* REMOVE the .drawer-overlay rule completely */

.chapter-drawer {
  position: fixed;
  top: 0;
  /* Position drawer on the right */
  right: 0;
  left: auto; /* Ensure right positioning takes precedence */
  width: 280px;
  max-width: 80%;
  height: 100%;
  background-color: #fff;
  /* Adjust shadow direction */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  /* Start off-screen to the right */
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1050; /* Keep high z-index */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.button-chaps button {
  /* Remove default button appearance */
  background-color: transparent !important;
  border: none !important;
  padding: 5px !important; /* Adjust padding for click area */
  box-shadow: none !important;
  line-height: 1; /* Helps align icon vertically */
  cursor: pointer;
  color: inherit; /* Inherit text color for icon initially */
}

/* Style the icons within those buttons */
.button-chaps button i {
  font-size: 1.5rem; /* Adjust icon size as desired */
  color: #4e6766; /* Set a default icon color (e.g., gray) */
  vertical-align: middle; /* Helps align icons */
  display: inline-block;
  transition: color 0.2s ease-in-out; /* Smooth hover transition for icon color */
}

/* Remove visual feedback on the invisible button element */
.button-chaps button:hover,
.button-chaps button:focus,
.button-chaps button:active {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

/* Optional: Add visual feedback directly to the icon on hover */
.button-chaps button:hover i {
  color: #a2c3a4; /* Change icon color on hover (e.g., Bootstrap blue) */
}
.button-set button:hover i {
  color: #4e6766;
}
/* Open state transform doesn't change (moves to 0 offset) */
.chapter-drawer.open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
  flex-shrink: 0;
}

.drawer-header h4 {
  margin: 0;
  color: #333;
}

.close-drawer-btn {
  padding: 5px 8px;
  border-radius: 4px;
  background: none;
  border: none;
}
.close-drawer-btn i {
  font-size: 1.1rem;
}

.chapter-menu-list {
  list-style: none;
  padding: 10px 0;
  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
}

.chapter-menu-list li {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}
.chapter-menu-list li:last-child {
  border-bottom: none;
}

.chapter-menu-list li:hover {
  background-color: #e9ecef;
  color: #000;
}

.chapter-menu-list li.active {
  background-color: #a2c3a4;
  color: #4e6766;
  font-weight: bold;
}

.chapter-content-main {
  padding: 20px;
  /* Remove top padding related to left button */
  /* padding-top: 70px; */
  width: 100%;
}

.chapter-content-main h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #343a40;
}
.chapter-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  width: 300px;
  height: auto;
  max-width: 100%;
  border-radius: 5px;
}

.story-text {
  line-height: 1.6;
  color: #212529;
}

.story-text p {
  margin-bottom: 1em;
}
/* MENU TOGGLE ICON */
.menu-toggle-btn {
  top: 15px;
  right: 15px;
  left: auto;

  background-color: transparent !important;
  border: none !important;
  padding: 5px !important;
  box-shadow: none !important;
  border-radius: 0;
  line-height: 1;
  cursor: pointer;
  width: auto;
  height: auto;
}

.menu-toggle-btn i {
  font-size: 1.8rem;
  color: #333;
  display: block; /* Helps with sizing */
}

.menu-toggle-btn:hover,
.menu-toggle-btn:focus,
.menu-toggle-btn:active {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  color: #4e6766;
}

.menu-toggle-btn:hover i {
  color: #a2c3a4;
}

/* SYPNOSIS STYLES */
.synopsis-section {
  margin-bottom: 1.5em;
  padding: 10px;
}
.img-story {
  border-radius: 10px;
}
.synopsis-label {
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #343a40;
  font-size: 1.1em;
}

.synopsis-text {
  color: #555;
  font-style: italic;
  margin-bottom: 0;
}

.story-text {
  line-height: 1.6;
  color: #212529;
}

.story-text p {
  margin-bottom: 1em;
}
.name-story {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: #4e6766;
}
.story-title {
  color: white;
}
h2 .story-title {
  color: white;
}
.top-nav-actions {
  display: flex;
  justify-content: space-between;
  /* align-items: center;
  padding: 10px 15px; */
}

.nav-action-item {
  background-color: transparent;
  border: none;
  padding-top: 15px;
  margin: 0;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

/* Styling for the icons within the action items */
.nav-action-item i {
  font-size: 1.8rem;
  color: #333;
  display: block;
}

.nav-action-item:hover i {
  color: #4e6766;
  font-weight: bold;
}
</style>
