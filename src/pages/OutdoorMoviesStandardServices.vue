<template>
  <Layout>
    <OdmNav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></OdmNav>
    <div class="font-glasgow relative bg-backyard-movie bg-cover bg-no-repeat
    overflow-hidden">
  <div class="max-w-5xl mx-auto">
      <div class="mt-10 pb-5 md:pb-10 lg:pb-20 mx-auto max-w-7xl 
      px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="text-center">
          <h1 class="tracking-tight font-extrabold 
          text-gray-900 text-6xl md:text-7xl">
            <span class="block text-py uppercase drop-shadow">
            Outdoor Movies
            </span>
          </h1>
          <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div @click="scrollToBottom()" class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center 
              justify-center px-8 py-3 
              border border-transparent 
              text-bold font-bold 
              rounded text-black bg-py 
              hover:bg-yellow-200 md:py-4 md:text-xl md:px-10 uppercase">
                book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-6 md:py-10 lg:py-12 bg-emerald text-gray-800">
        <div class="flex justify-center gap-4">
          <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
          </a>
          <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image alt="instagram link" 
                class="p-1 object-center w-full h-full" 
                src="../instagram.png"/>
              </div>
          </a>
        </div>
  </div>
  <main class="py-12 bg-py text-gray-900 grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-4xl font-extrabold
      md:text-5xl uppercase">
        Outdoor and Inflatable movie screen rental company
      </p>
      <p class="mt-4 text-lg lg:mx-auto">
          Our Outdoor Movie Screen Rentals include everything you would need for a successful event. We utilize the best equipment the industry has to offer. Most of our outdoor movie services include screen, projection, sound, technicians and generator. We also have on hand back up equipment just in case! We so everything so you don't have to.
      </p> 
      <div class="relative flex py-5">
        <span class="w-10/12 invisible lg:visible mx-auto border-t-2 border-gray-800"></span>
        </div>
       <p class="mt-2 text-2xl font-bold
      md:text-3xl uppercase">
        Outdoor Movie Screens and Inflatable Movie Screens
      </p>
      <p class="mt-4 text-lg lg:mx-auto">
          We use Airscreen <span>&#174;</span> inflatable outdoor movie screens for our events. This manufacturer is in the top of it's class. They easily withstand the grind of weekly rentals. These outdoor movie screens have the highest wind rating in the industry and with their design maintain a tight projection surfac for optimal viewing and professional appearance.
      </p> 
      <p class="mt-2 text-2xl font-bold
      md:text-3xl uppercase">
        Outdoor Movie Projectors
      </p>
      <p class="mt-4 text-lg lg:mx-auto">
          The projectors we use are Christie <span>&#174;</span> brand. Falling in line with out screens they are highly regarded as the best of the best. We only project in High Definition (HD). The projectors we use for each screen carry a high level of lumens (brightness). This gives our clients the brightest, sharpest image possible - even with ambient light!  
      </p> 
      <p class="mt-2 text-2xl font-bold
      md:text-3xl uppercase">
        Outdoor Movie Sound
      </p>
      <p class="mt-4 text-lg lg:mx-auto">
          The third and equally important component to an outdoor movie event is your sound system. Each outdoor movie system is sent out with the anticipated audience size in mind. Small back yard systems to full line-arrays we ensure there isn't a bad seat in the house. We use QSC <span>&#174;</span> and JBL <span>&#174;</span> sound for all of our events. Both are trusted and of the highest professional quality. 
      </p> 
    </div>
  </div>
    <!-- hr -->
    
  </main>


  <!-- services teal part -->
  <div class="py-12 bg-emerald text-white grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        Inflatable Screen Size Options
      </p>
    </div>
  </div>
<!-- hr -->
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
  </div>
    <section
      class="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-10 py-4 "
    >
      <article
        class="bg-white border border-gray-600 w-8/12 lg:w-full mb-4"
      >
        <div class="w-full py-4 bg-gray-700 text-center">
          <h2 class="flex justify-center font-bold text-2xl uppercase">
          Small 18' Movie Screen
          </h2>
        </div>
        <div class="p-4">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">18' foot Airscreen <span>&#174;</span> Inflatable Screen</li>
            <li class="pb-4">Christie <span>&#174;</span> HD Projection</li>
            <li class="pb-4">Professional Sound System</li>
            <li class="pb-4">Pre-Show Music and On-Screen Promotional Opportunities</li>
            <li class="pb-4">Whisper Quiet Honda Power</li>
            <li class="pb-4">Experienced Technicians to Deliver, Set Up, Operate and Take Down</li>
            <li class="pb-4">Five Million Dollor Liability Insurance</li>
            <li class="pb-4">Great for Schools, Backyards, Smaller Audiences, Intimate Setting</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Screen!
            </button>
          </div>
        </div>
      </article>

      <article
        class="bg-white border border-gray-600 w-8/12 lg:w-full mb-4"
      >
        <div class="w-full py-4 bg-gray-700 text-center">
          <h2 class="flex justify-center font-bold text-2xl uppercase">
          Medium 28' Movie Screen
          </h2>
          <span class="text-sm">Most Popular Inflatable Movie Screen</span>
        </div>
        <div class="p-4 ">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">28' Foot Airscreen <span>&#174;</span> Inflatable Screen</li>
            <li class="pb-4">Christie <span>&#174;</span> High Brightness HD Projection</li>
            <li class="pb-4">Professional Sound System with Subs</li>
            <li class="pb-4">Pre-Show Music and On-Screen Promotional Opportunities</li>
            <li class="pb-4">Whisper Quiet Honda Power</li>
            <li class="pb-4">Experienced Technicians to Deliver, Set Up, Operate and Take Down</li>
            <li class="pb-4">Whisper Quiet Honda Power</li>
            <li class="pb-4">Five Million Dollor Liability Insurance</li>
            <li class="pb-4">Increased 'Wow Factor'</li>
            <li class="pb-4">Great for Schools, Municipal Parks, Corporate and Special Events</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Screen!
            </button>
          </div>
        </div>
      </article>
      <article
        class="bg-white border border-gray-600 w-8/12 lg:w-full"
      >
        <div class="w-full py-4 bg-gray-700 text-center">
          <h2 class="flex justify-center font-bold text-2xl uppercase">
          Large 50' Movie Screens
          </h2>
        </div>
        <div class="p-4 ">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">50' Airscreen <span>&#174;</span> Inflatable Screen</li>
            <li class="pb-4">Professional Sound System with Subs Scaled to Audience Size</li>
            <li class="pb-4">Pre-Show Music and On-Screen Promotional Opportunities</li>
            <li class="pb-4">Whisper Quiet Honda Power</li>
            <li class="pb-4">Experienced Technicians to Deliver, Set Up, Operate and Take Down</li>
            <li class="pb-4">Whisper Quiet Honda Power</li>
            <li class="pb-4">Five Million Dollor Liability Insurance</li>
            <li class="pb-4">Maximum Audience Impact</li>
            <li class="pb-4">Great for Medium and Large Events, Parks, Special Events</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Screen!
            </button>
          </div>
        </div>
      </article>
    </section>
  </div>
  




  <div class="py-12 bg-gray-800 text-white grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        CHECK US OUT<br/> IN ACTION
      </p>
       <p class="mt-4 max-w-2xl md:text-xl lg:mx-auto">
        We use only Airscreen inflatable movie screens for rent in our inventory. Considered the number one Outdoor Movie screen on the market. They are rated for winds up up to 60kph and are made from the highest quality material to withstand weekly use in the screen rental business. Great piece of mind for your important event.      </p> 
    </div>
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
    </div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Pictue from a balconey looking down on a setup of chairs and wedding decorations, in front of a large movie screen." 
          class="object-cover object-center w-full h-full block" 
          src="../odm1.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Sunset in a parking lot, cars are parked in front of a large inflatable screen" 
          class="object-cover object-center w-full h-full block" 
          src="../odm2.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Large gathering of people in lawn chairs in front on a giant television screen" 
          class="object-cover object-center w-full h-full block" 
          src="../odm3.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Large panorama of people parked in parking lot at sunset, awaiting an outdoor movie" 
          class="object-cover object-center w-full h-full block" 
          src="../odm4.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Sunny backyard with long pool, canopy and giant tv" 
          class="object-cover object-center w-full h-full block" 
          src="../odm5.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Family sittting on couch in backyard watching a giant television" 
          class="object-cover object-center w-full h-full block" 
          src="../odm6.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="People laying in inflatable dingies on grass, watching a movie outdoors." 
          class="object-cover object-center w-full h-full block" 
          src="../odm7.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt="Riderless motorcycles parked in front of an inflatable movie screen" 
          class="object-cover object-center w-full h-full block" 
          src="../odm8.jpg"/>
        </a>
      </div>
    </div>
  </div>
</section>
  </div>
  <div class="bg-red">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-1 mx-auto">
        <div class="px-4">
          <h3 class="md:pt-12 pt-4 pb-8 text-4xl md:text-5xl font-medium 
          leading-6 text-white">
            Get in touch.</h3>
          
          <span class="text-white text-3xl">
            <a href="tel:+1-888-853-0053">1-888-853-0053</a></span>
            <div class="flex gap-4 pt-8">
            <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
            </a>
            <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="instagram link" 
                class="p-1 object-center w-full h-full" 
                src="../instagram.png"/>
              </div>
            </a>
            </div>
            <div class="flex pt-8">
              <g-link to="/">
                <button
                class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 ">
                  Visit our party cinemas homepage
                </button>
              </g-link>
            </div>
            <!-- <div class="flex pt-8">
              <button class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 ">
                Visit our video dance party page
              </button>
            </div> -->
        </div>
      </div>
      <div class="mt-5 md:mt-10 p-4 md:col-span-2 max-w-4xl">
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
          method="post">
          <div class="g-recaptcha"
            data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR">
          </div>
          <!-- honeypot -->
          <input type="text" name="xx_password" class="hidden" tabindex="-1" autocomplete="off">
          <div class="shadow overflow-hidden sm:rounded-md text-gray-700">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="name" class="block text-sm font-medium">Name</label>
                  <input required type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="email-address" class="block text-sm font-medium">Email address</label>
                  <input required type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="phone" class="block text-sm font-medium">Phone</label>
                  <input required type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-400 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="subject" class="block text-sm font-medium">Subject</label>
                  <input required type="text" name="subject" id="subject" autocomplete="subject" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="message" class="block text-sm font-medium">Message</label>
                  <textarea required type="text" name="message" id="message" autocomplete="message" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-red" />
    </div>
  </div>

  
  
  
</div>
<!-- hr -->
    
  <!-- <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
    <g-image class="h-24 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../inflatable-screen-rental.jpg" alt=""/>
  </div> -->
</div>
      <div class="bg-gray-800 text-center text-gray-200 pb-4">
        <div class="text-sm">Copyright <span>&#169;</span> 
        2020 Party Cinemas. All rights reserved
        </div>
      </div>
    
  

  </Layout>
</template>

<script>
import OdmNav from "../components/OdmNav.vue"
export default {
  components: { OdmNav },
  metaInfo: {
    title: 'Standard Services'
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
}
</script>

