<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { RouterLink } from 'vue-router' // Assuming you use Vue Router for the back arrow

// --- State ---
const isDrawerOpen = ref(false)
const isFavoriteActive = ref(false)
const isBookmarkActive = ref(false)
const isDownloaded = ref(false)

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
    mainText: `The morning mist clung to the cobblestone streets of Greyhaven as Emma stepped out of the inn, hands tucked into the sleeves of her knit cardigan. \nThe scent of salt and wet sand filled her lungs—sharper than she remembered. \nA gull cried above, circling lazily before disappearing behind the weathered rooftop of Finch’s Market. \nThe familiarity pressed into her chest like a weight and a balm all at once. \nShe walked the main road slowly, glancing at each storefront like she was flipping through the pages of an old photo album. \nThe bakery still had hand-painted signs, and the glass display was fogged from the warmth inside. \nGod, do they still make cinnamon knots on Thursdays? she wondered. \nThe air stirred with memories. \nShe hesitated at the corner, eyes drawn toward the dockside café.\n\n"Emma?" a voice called from behind. \nShe turned. \nA woman in her early thirties, apron flour-dusted and hair piled in a loose bun, stood in the bakery doorway. \nEmma squinted. \n“Grace?” she asked, stepping forward.\n\n"Grace Nichols now," the woman grinned. \n"Married Marcus—remember him? He used to trip over everything in gym class." \nShe rushed forward and embraced Emma tightly. \n“I can’t believe it. Ten years, Em. You vanished.” \nEmma gave a soft, guarded laugh. \n“Yeah, I did. It was...complicated.” \nGrace stepped back, eyes searching Emma’s. \n“Everyone thought you left because of Noah. You know he never really—well. That’s none of my business.” \nShe bit her lip, suddenly self-conscious. \n“Come on in. You want a coffee?”\n\nInside, the bakery smelled like melted sugar and rising dough. \nA few regulars looked up from their booths, eyebrows raised. \nEmma felt their eyes stick like gum to the soles of her shoes. \nGrace noticed too. \n“Ignore them. \nSmall towns are big on memories,” she said, setting down a steaming mug.\n\nEmma wrapped her hands around the cup. \n“It’s like nothing has changed. \nBut everything feels…off. \nLike I’m walking through a dream that isn’t mine anymore.”\n\nGrace nodded slowly. \n“That’s how it goes. You leave, time moves different here. Slower, but deeper. People stay stuck in the year you left.” \nShe paused. \n“Especially Noah.”\n\nEmma’s fingers tightened around the mug. \nShe didn’t reply.`,
  },
  {
    id: 3,
    title: 'Chapter 3: First Sight',
    mainText: `The afternoon sun cast long shadows across Main Street as Emma stepped out of the bakery, the warmth of cinnamon still lingering on her skin. \nHer nerves buzzed beneath her calm exterior—too many memories stirred up in too short a time. \nShe walked aimlessly, letting her feet guide her past the bookstore, the barber shop, and finally to the narrow alley that led to the town's only grocery store.\n\nInside, the air was cool and humming with fluorescent lights. \nThe same crooked “Weekly Deals” board hung by the entrance, still misspelled—“banannas” with two N’s. \nEmma smiled faintly. \nShe grabbed a basket and wandered into the produce section, absentmindedly picking up a bruised apple, then putting it back. \nShe wasn’t hungry. \nShe was stalling.\n\nShe was rounding the corner near the dairy aisle when she froze.\n\nNoah.\n\nHe was standing in front of the refrigerator door, examining a carton of milk like it held all the answers in the world. \nHis hair was shorter now, darker, as if the sun had stopped touching him. \nA few days' stubble clung to his jaw, and he had that familiar way of leaning slightly to one side, weight resting on his left leg. \nTime hadn’t erased him—it had sharpened him.\n\nEmma’s heart stuttered. \nShe instinctively took a step back, but her basket hit the metal edge of a display shelf. \nThe sound echoed louder than it should have.\n\nNoah turned.\n\nFor a heartbeat, neither of them spoke. \nHis gaze locked with hers, unreadable. \nThe corners of his mouth didn’t move. \nHis eyes, that deep shade of sea-glass green, blinked slowly—as if confirming she wasn’t a ghost.\n\n“Emma,” he said at last, low and even.\n\nHer voice caught in her throat. \n“Hi.”\n\nA silence stretched between them, taut as fishing line. \nHe took a small step forward, still holding the milk. \n“Didn’t think I’d see you in here.”\n\nShe swallowed. \n“I didn’t think I’d be here.”\n\nA flicker of something passed through his eyes—pain, maybe, or disbelief. \n“You staying long?”\n\n“I don’t know yet,” she said, trying to keep her voice steady.\n\nNoah nodded slowly, then turned away, placing the milk back in the fridge like it had suddenly gone sour. \n“Well… welcome home.” \nHe didn’t wait for her response. \nJust walked past, the space between them suddenly full of everything they hadn’t said.`,
  },
  {
    id: 4,
    title: 'Chapter 4: Letters Never Sent',
    mainText: `\nRain tapped lightly against the windowpane of the small room Emma had rented at the Greyhaven Inn. \nShe sat cross-legged on the bed, a weathered shoebox resting on her lap. \nShe hadn’t meant to find it—it had been tucked into the back of her suitcase, stashed away in an old hoodie from college she’d grabbed last minute. \nBut now, it stared up at her like a dare.\n\nShe opened the lid.\n\nInside were envelopes, all addressed to Noah. \nNone had stamps. \nNone had been sent. \nEmma picked one at random, unfolding the paper slowly, like it might crumble. \nThe ink had faded slightly, but her words were clear—raw, unfinished pieces of a heart she thought she’d buried.\n\n“I’m sorry for walking away without telling you. \nI thought if I stayed, I’d never leave. \nAnd I needed to leave.”\n\nEmma closed her eyes. \nHer younger self bled through those words—desperate, guilty, confused. \nShe remembered writing that letter at 3 a.m. in a university dorm room, trying not to cry loud enough to wake her roommate.\n\nThere was another one. \nNo date. \nJust his name scrawled on the front in hurried pen.\n\n“You kissed me by the seawall and I thought that meant forever.\nBut then your silence scared me.\nAnd my father’s drinking. \nAnd everything I didn’t know how to fix.”\n\nShe exhaled shakily and folded the letter back up.\n\nA knock on the door startled her. \nEmma jumped, quickly shoving the letters back into the box and sliding it under the bed. \nShe opened the door to find Mrs. Callahan, the innkeeper, holding a towel and a fresh pair of sheets.\n\n“Storm’s rolling in sooner than expected,” \nMrs. Callahan said, her voice calm but knowing. \n“Better make sure your windows are latched. Power tends to go out with the first real gust.”\n\nEmma nodded. \n“Thanks. I’ll check them.”\n\nMrs. Callahan lingered, her eyes kind but sharp. \n“You alright, dear? You’ve looked like you’re chasing ghosts since you arrived.”\n\nEmma offered a strained smile. \n“Maybe I am.”\n\nAfter the door shut, Emma sat back on the bed, staring at the window streaked with early rain. \nShe thought of Noah’s face in the grocery store—how it hadn’t hardened like she feared, but hadn’t softened either. \nSomewhere in those letters were all the things she hadn’t said. \nBut none of them prepared her for what might come next.`,
  },
  {
    id: 5,
    title: 'Chapter 5: Storm Warning',
    mainText: `Greyhaven’s horizon darkened with a brooding sky as Emma made her way to the pier. \nWind whipped strands of hair into her eyes, and the sea churned louder than usual—an audible warning from nature itself. \nThe annual pre-storm bonfire was still happening, despite the weather. \nBecause in Greyhaven, tradition clung as tightly as the salt in the air.\n\nThe beach was already dotted with familiar faces gathered around the growing flames. \nChildren chased each other with sparklers while adults sipped from thermoses, telling stories louder than the wind. \nEmma stood at the edge of it all, the outsider who used to belong.\n\n“Didn’t expect you here,” came a voice beside her.\n\nShe turned. \nNoah stood a few feet away, hands buried in his jacket pockets, eyes on the fire. \nHis presence didn’t startle her—it grounded her, somehow.\n\n“I wasn’t sure I’d come,” Emma admitted. \n“But I guess I missed the fire. And the company.”\n\nNoah gave a soft huff. \n“You missed the company, huh? Even after all these years?”\n\nThere was no accusation in his tone, just quiet curiosity. \nShe glanced at him. \n“I missed a lot of things. You more than most.”\n\nHe didn’t answer at first. \nJust looked at her, really looked. \n“So why now? Why after all this time?”\n\nThe fire popped loudly, sending embers into the sky. \nEmma stared into it. \n“Because running only ever took me so far. \nAnd I couldn’t outrun the past forever.”`,
  },
  {
    id: 6,
    title: 'Chapter 6: Sparks and Silence',
    mainText: `The bonfire crackled on as the sun sank behind thickening clouds. Emma and Noah stood apart from the others, caught in the pull of a conversation that was just beginning to unbury itself.

“You look like you’ve been carrying something heavy,” Noah said finally.

Emma nodded, eyes on the fire. “I left because I thought that’s what I needed to grow. To be someone different. But I ended up just being someone lonely.”

Noah’s jaw tensed. “You could’ve told me. I would’ve understood.”

“I didn’t think you would,” she whispered. “Back then… you stopped saying things, Noah. After my mom died, and my dad—he started drinking worse. I felt like I was drowning, and you didn’t even see it.”

He took a step closer. “I did see it. I just didn’t know how to help without losing you.”

Emma looked up at him, her voice trembling. “But you lost me anyway.”

The silence between them wasn’t empty—it was thick with memory. Then, without warning, thunder rumbled over the sea, long and low.

Noah looked toward the sky. “Storm’s coming sooner than they said. You should get inside.”

Emma nodded but didn’t move. Neither did he.`,
  },
  {
    id: 7,
    title: 'Chapter 7: The Calm Before',
    mainText: `The next day, the town hunkered down. Wind battered windows, and the shoreline overflowed onto the boardwalk. Emma stayed at the inn, pacing. The storm outside mirrored the one inside her—restless, unresolved.

She called her father. The line rang six times before clicking to voicemail. She didn’t leave a message.

Restless, she walked to her childhood home on Harbor Lane. The windows were dark, and the porch sagged more than she remembered. She knocked. After a long pause, the door opened.

Her father stood there, older, greyer, a glass in his hand even now.

“You’re back,” he said, voice gravelly.

Emma swallowed hard. “Just for a while.”

He opened the door farther. “You can come in. If you want.”

Inside, the house smelled like dust and salt and silence. They sat in the same room where arguments used to echo through the floorboards.

“You blamed me for her death,” he said quietly. “Maybe I did too.”

Emma didn’t deny it. “We both needed someone to blame. But I needed you, and you weren’t there.”

He looked at her, eyes glassy. “I wasn’t ready to be someone’s anchor. Still not.”

Emma nodded slowly. “I didn’t come back for you. But maybe… maybe we both needed to say that.”`,
  },
  {
    id: 8,
    title: 'Chapter 8: When the Rain Falls',
    mainText: `The power went out just after sunset. Emma lit a candle and stared out at the raging sea from her inn window. Then her phone buzzed—Noah: Shelter’s opening at the rec center. You coming?

She texted back: Already on my way.

The streets were soaked, but the shelter buzzed with quiet urgency. Cots lined the gym floor, and people passed out blankets and hot tea. Emma found Noah in the corner, helping an elderly man settle in.

When he saw her, he offered a tired smile. “Thought you’d hole up in that inn.”

“Didn’t want to be alone,” she said.

Later, they sat on cots side by side. The storm pounded the roof like a drumbeat.

Emma turned to him. “Do you ever regret not chasing after me?”

He hesitated. “Every day. But I also thought… maybe you didn’t want to be found.”

“I wasn’t sure I did. But I think part of me hoped you would try.”

He reached out, brushing her hand with his. “I’m trying now.”`,
  },
  {
    id: 9,
    title: 'Chapter 9: Storm Warning',
    mainText: `By morning, the storm had passed. Greyhaven was wet and windblown, but still standing. The town emerged like something reborn—quiet, tentative, grateful.

Emma walked the beach with Noah, boots sinking into the wet sand. Debris littered the shore—branches, broken planks, someone’s sandal.

“I used to think this place would never change,” Emma said. “But maybe it just waited for me to change first.”

Noah glanced at her. “You think you’re staying this time?”

“I don’t know yet,” she admitted. “But I’m not running.”

They walked in silence, waves lapping at their feet.

Noah finally said, “I kept every letter you wrote me.”

She stopped. “You never got them. I never sent them.”

He smiled softly. “I know. But I wrote my own. Just never had an address.”

She reached for his hand. This time, he didn’t let go.`,
  },
  {
    id: 10,
    title: 'Chapter 10: After The Rain', // Example final chapter
    mainText: `A week passed. \nThe town returned to its rhythm—repairing, rebuilding, remembering. \nEmma sat on the porch of the inn, coffee in hand, watching the sky lighten above the horizon.\n\nGrace pulled up in her car. \n“Thought I’d find you here.”\n\nEmma smiled. \n“Thinking of moving back. Maybe even fixing up the old house.”\n\nGrace grinned. \n“Good. We’ve missed you. Some more than others.”\n\nAfter she left, Emma took out the last of the letters. \nShe walked to the seawall where Noah had first kissed her ten years ago. \nThe wind was softer now.\n\nShe tore the letter open and let the paper fly into the ocean breeze.\n\nThe past was written. \nBut the rest of the story? That was hers to tell.`,
  },
])

const selectedChapterId = ref(chapters.value.length > 0 ? chapters.value[0].id : null)

// --- Computed Property ---
// currentChapter is still useful if you want to access the currently "active" chapter's data for other purposes
const currentChapter = computed(() => {
  return chapters.value.find((chapter) => chapter.id === selectedChapterId.value) || null
})

// --- Methods for Drawer and Action Buttons ---
function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}
function closeDrawer() {
  isDrawerOpen.value = false
}
function toggleFavorite() {
  isFavoriteActive.value = !isFavoriteActive.value
  console.log('Favorite toggled:', isFavoriteActive.value)
}
function toggleBookmark() {
  isBookmarkActive.value = !isBookmarkActive.value
  console.log('Bookmark toggled:', isBookmarkActive.value)
}
function handleDownload() {
  if (isDownloaded.value) {
    console.log('Already downloaded.')
    return
  }
  console.log('Initiating download...')
  setTimeout(() => {
    isDownloaded.value = true
    console.log('Download complete!')
  }, 1000)
}

// --- Intersection Observer for Scrollspy ---
let observer = null
const chapterElements = ref({}) // Stores DOM element references: { 1: <div#chap1>, 2: <div#chap2> }

// Function to be used in :ref to collect chapter elements
const setChapterElementRef = (el, chapterId) => {
  if (el) {
    chapterElements.value[chapterId] = el
  }
}

onMounted(() => {
  nextTick(() => {
    // Ensure DOM elements are available
    const scrollRoot = document.querySelector('.chapter-content-main')
    if (!scrollRoot) {
      console.error('Scroll container .chapter-content-main not found.')
      return
    }

    const options = {
      root: scrollRoot, // The element that is used as the viewport for checking visibility.
      rootMargin: '0px 0px -50% 0px', // Adjust margins: top, right, bottom, left
      // Negative bottom margin means it triggers when element is higher up in view
      threshold: 0.1, // Trigger when 10% of the element is visible. Adjust as needed.
      // Or an array e.g. [0, 0.25, 0.5, 0.75, 1] for more granular callbacks
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const chapterId = parseInt(entry.target.dataset.chapterId)
        if (entry.isIntersecting) {
          // When a chapter becomes visible (based on threshold and rootMargin)
          // To avoid rapid changes if multiple chapters are in the "trigger zone",
          // we can prioritize the one that's higher up in the viewport.
          // A simple approach for now: update if the current entry's top is less than or near 0.
          if (
            entry.boundingClientRect.top < scrollRoot.clientHeight * 0.5 &&
            entry.intersectionRatio > 0.1
          ) {
            // Chapter is in upper half
            if (selectedChapterId.value !== chapterId) {
              selectedChapterId.value = chapterId
            }
          }
        }
      })
    }, options)

    // Observe each chapter content section
    chapters.value.forEach((chapter) => {
      const el = chapterElements.value[chapter.id]
      if (el) {
        observer.observe(el)
      } else {
        console.warn(`Chapter element for ID ${chapter.id} not found.`)
      }
    })

    // Set initial chapter based on what's visible (or default to first)
    if (chapters.value.length > 0 && !currentChapter.value) {
      selectChapterAndClose(chapters.value[0].id, false) // Select first chapter, no scroll
    }
  })
})

onBeforeUnmount(() => {
  if (observer) {
    chapters.value.forEach((chapter) => {
      const el = chapterElements.value[chapter.id]
      if (el) {
        observer.unobserve(el)
      }
    })
    observer.disconnect()
  }
})

// Updated to scroll to the chapter smoothly
async function selectChapterAndClose(chapterId, shouldScroll = true) {
  selectedChapterId.value = chapterId
  closeDrawer()

  if (shouldScroll) {
    await nextTick() // Wait for DOM to update
    const element = chapterElements.value[chapterId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<template>
  <div class="container-fluid root-container">
    <div class="chapter-reader-container">
      <div class="top-nav-actions">
        <RouterLink to="/" class="nav-action-item">
          <i class="bi bi-arrow-left"></i>
        </RouterLink>
        <button type="button" class="nav-action-item menu-toggle-btn" @click="toggleDrawer">
          <i class="bi bi-text-right"></i>
        </button>
      </div>

      <div class="chapter-drawer" :class="{ open: isDrawerOpen }">
        <div class="container d-flex justify-content-end mt-3">
          <button type="button" class="nav-action-item menu-toggle-btn" @click="toggleDrawer">
            <i class="bi bi-text-right"></i>
          </button>
        </div>
        <div class="drawer-header mt-3 align-items-center d-flex flex-column">
          <img class="img-story mb-2" src="/src/assets/image/beforeTheRain.png" width="80px" />
          <div class="text-center">
            <h5 class="name-story fw-bold">Before the Rain</h5>
            <p class="mb-2 name-story">by Sarah Johnson</p>
          </div>
          <div class="d-flex flex-row justify-content-around gap-2 button-chaps mt-2 w-100 px-2">
            <button @click="toggleFavorite" title="Favorite">
              <i :class="isFavoriteActive ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'"></i>
            </button>
            <button @click="toggleBookmark" title="Bookmark">
              <i
                :class="isBookmarkActive ? 'bi bi-bookmark-fill text-primary' : 'bi bi-bookmark'"
              ></i>
            </button>
            <button @click="handleDownload" :disabled="isDownloaded" title="Download">
              <i :class="isDownloaded ? 'bi bi-check-circle-fill' : 'bi bi-download'"></i>
            </button>
            <div>
              <button
                class="button-set"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                title="Settings"
              >
                <i class="bi bi-gear"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="chapter-menu-list mt-2">
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

      <div class="chapter-content-main">
        <section
          v-for="chapter in chapters"
          :key="chapter.id"
          :id="`chapter-view-${chapter.id}`"
          :ref="(el) => setChapterElementRef(el, chapter.id)"
          :data-chapter-id="chapter.id"
          class="chapter-section"
        >
          <h2 class="story-title justify-content-center text-center">
            {{ chapter.title }}
          </h2>
          <div class="story-text mt-3">
            <p
              v-for="(paragraph, index) in (chapter.mainText || '')
                .split('\n')
                .filter((p) => p.trim() !== '')"
              :key="`${chapter.id}-p-${index}`"
            >
              {{ paragraph }}
            </p>
          </div>
        </section>
      </div>

      <!-- SETTINGS MODAL -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Settings</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensures the app takes full height and no body scroll interferes */
.root-container {
  height: 100vh;
  overflow: hidden; /* Prevent body scroll, all scrolling in .chapter-content-main */
  display: flex;
  flex-direction: column;
}

.chapter-reader-container {
  position: relative; /* For absolute/fixed children like drawer and top-nav */
  width: 100%;
  flex-grow: 1; /* Takes remaining height */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Important */
}

.top-nav-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff; /* Give it a background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  z-index: 1050; /* Above chapter content, below drawer */
  flex-shrink: 0; /* Prevent shrinking */
}

.nav-action-item {
  background-color: transparent;
  border: none;
  padding: 5px;
  margin: 0;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.nav-action-item i {
  font-size: 1.6rem; /* Slightly smaller for top bar */
  color: #333;
  display: block;
}
.nav-action-item:hover i {
  color: #007bff;
}

.chapter-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  max-width: 80%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1100; /* Highest */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Content within drawer will scroll if needed */
}
.chapter-drawer.open {
  transform: translateX(0);
}
.drawer-header {
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
  flex-shrink: 0;
}
.img-story {
  border-radius: 8px;
  object-fit: cover;
}
.name-story {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4e6766;
}
.button-chaps button {
  background-color: transparent !important;
  border: none !important;
  padding: 8px !important;
  box-shadow: none !important;
  line-height: 1;
  cursor: pointer;
  color: inherit;
}
.button-chaps button i {
  font-size: 1.4rem; /* Adjusted size for drawer */
  color: #555;
  vertical-align: middle;
  transition: color 0.2s ease-in-out;
}
.button-chaps button:hover i {
  color: #a9b18f;
}
.button-chaps button .bi-heart-fill.text-danger {
  color: #4e6766 !important;
}
.button-chaps button .bi-bookmark-fill.text-primary {
  color: #4e6766 !important;
}
.button-chaps button .bi-check-circle-fill.text-success {
  color: #4e6766 !important;
}

.chapter-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto; /* Allow chapter list to scroll */
  flex-grow: 1;
}
.chapter-menu-list li {
  padding: 12px 20px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  color: #495057;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
}
.chapter-menu-list li:last-child {
  border-bottom: none;
}
.chapter-menu-list li:hover {
  background-color: #e9ecef;
  color: #000;
}
.chapter-menu-list li.active {
  background-color: #a9b18f; /* Bootstrap primary */
  color: black;
  font-weight: bold;
}

/* This is the main scrollable content area */
.chapter-content-main {
  flex-grow: 1; /* Takes up available space after top-nav */
  overflow-y: auto; /* This container will scroll all chapters */
  padding: 20px; /* Padding for the content */
  scroll-behavior: smooth; /* For programmatic scrolling */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.chapter-section {
  padding-top: 20px; /* Space for title if rendered */
  margin-bottom: 5vh; /* Visual separation, can be adjusted */
  min-height: 80vh; /* Ensure chapter takes up significant space for observer */
  opacity: 0; /* Start hidden for animation */
  transform: translateY(20px); /* Start slightly down for animation */
  animation: fadeInSlideUp 0.5s ease-out forwards;
}

/* Animation for chapters appearing */
@keyframes fadeInSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Delay animation for subsequent chapters to create a staggered effect (optional) */
.chapter-section:nth-child(n + 2) {
  animation-delay: 0.2s;
}
.chapter-section:nth-child(n + 3) {
  animation-delay: 0.4s;
}
/* You might want a more dynamic way to handle stagger if many chapters */

h2.story-title {
  font-family: 'Georgia', serif; /* Example serif font for titles */
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.story-text {
  line-height: 1.7;
  font-size: 1.1rem; /* Slightly larger for readability */
  color: #333;
  font-family: 'Georgia', serif; /* Consistent serif font for story */
}

.story-text p {
  margin-bottom: 1.25em;
  text-indent: 1.5em; /* Indent first line of paragraphs */
}
.story-text p:first-child {
  text-indent: 0; /* No indent for the first paragraph of a section */
}
</style>
