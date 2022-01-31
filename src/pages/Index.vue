<template>
  <Layout>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
 
      <!-- nav -->
      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">party cinema</span>
                  <g-image alt="Party cinema party hat logo" src="~/party-cinemas-thumbnail-logo.png" width="60" />
                  <!-- <img class="h-8 w-auto sm:h-10" src="./srv/"> -->
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button @click="menu = !menu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <g-link class="font-medium text-gray-500 hover:text-gray-900"
                to="/">
                Home</g-link>
                <span 
                @click="services = !services"
                class="relative cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                  Services ▼
                </span>
                <div v-if="services" class="absolute shadow-md p-4 top-8 z-10 bg-white w-56">
                  <div @click="vdpTooltip = !vdpTooltip" class="relative">
                    <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Video Dance Party</g-link>
                    <div v-if="vdpTooltip" class="absolute mx-2 bottom-8 shadow-md">
                      <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                        This site is under maintenance. Please fill out the form below to get more info.
                        <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </div>
                    </div>
                  </div>
                 
                  
                    <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/outdoor-movies/">
                    Outdoor Movies
                    </g-link>
                  
                  <div @click="avTooltip = !avTooltip" class="relative">
                    <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    AV Plus</g-link>
                    <div v-if="avTooltip" class="absolute mx-2 bottom-8 shadow-md">
                      <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                        This site is under maintenance. Please fill out the form below to get more info.
                        <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="inline font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                @click="scrollToBottom()">
                Contact</div>
            </div>
          </nav>
        </div>
 
        <!--
          Mobile menu, show/hide based on menu open state.
 
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div v-if="menu" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <g-image alt="Example image" src="~/party-cinemas-thumbnail-logo.png" width="50" />
              </div>
              <div class="-mr-2">
                <button @click="menu = !menu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <g-link class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                to="/">
                Home</g-link>
                
                <span class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 bg-gray-50">
                  Services 
                </span>
                <div class="px-6">
                  <div @click="vdpTooltip = !vdpTooltip" class="relative">
                    <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Video Dance Party</g-link>
                    <div v-if="vdpTooltip" class="absolute mx-2 bottom-8 shadow-md">
                      <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                        This site is under maintenance. Please fill out the form below to get more info.
                        <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </div>
                    </div>
                  </div>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies/">
                  Outdoor Movies</g-link>
                  <div @click="avTooltip = !avTooltip" class="relative">
                    <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    AV Plus</g-link>
                    <div v-if="avTooltip" class="absolute mx-2 bottom-8 shadow-md">
                      <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                        This site is under maintenance. Please fill out the form below to get more info.
                        <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </div>
                    </div>
                  </div>
                </div>  
                <div class="px-3 py-2 rounded-md text-base font-medium cursor-pointer
                text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                @click="scrollToBottom()">
                Contact</div>
            </div>
          </div>
        </div>
      
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span class="block text-yellow-400 xl:inline uppercase">Party Cinemas</span>
          </h1>
          <h2 class="mt-2 font-bold uppercase text-red sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-3xl lg:mx-0">
            Your Big Screen Entertainment Professionals
          </h2>
          <div class="mt-5 sm:mt-8 sm:flex md:flex-wrap sm:justify-center lg:justify-start">
            <div @click="scrollToBottom()" class="rounded-md shadow">
              <a href="#" class="w-full font-extrabold uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-white bg-red hover:bg-black md:py-4 md:text-lg md:px-10">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <g-image class="w-full object-cover lg:object-contain sm:h-46 lg:w-full lg:h-full" 
    src="../pc-banner.png" alt="four photo collage of party cinema events, indoor dance event, indoor multi-tv event, outdoor drive in movie event and a outdoor lawn movie event"/>
  </div>

</div>
<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Our services
      </p>
       <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        At Party Cinemas we are true professionals. We've been entertaining for nearly 20 years. We are fully licensed
        and insured and guarantee you an exceptional and professional experience!
      </p> 
    </div>

    <div class="mt-10">
      <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red text-white">
              <!-- Heroicon name: outline/globe-alt -->
              <!-- <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg> -->
            </div>
            <h3 class="ml-16 text-2xl leading-6 font-medium text-gray-900">Video Dance Party</h3>
            <h4 class="text-sm ml-16 pt-2 text-red font-semibold tracking-wide">
              <span>School dances | </span>
              <span>Youth dances | </span>
              <span>Adult dances | </span>
              <span>Corporate bookings | </span>
              <span>Private events | </span>
              <span>Fundraisers</span>
              </h4>
          
          <div class="mt-2 ml-16 text-base text-gray-500">
            <p>Our most popular event. A Video Dance Party! We have compiled the best VJs/DJs to bring your event and amazing
            performance. Each of our Video Dance DJ's (VJ's) has an area of expertise: Youth dances, adult dance and club style events.
            We service event planners, corporations, recreation and parks, festivals, events and or course private parties 
            and fundraisers.
            </p>
            <br/>
            <p>
            We also host our own Party Cinemas branded Community Youth Video Dance Fundraiser Events across Ontario in communities
            just like yours. These monthly Video Dance Fundraiser Events help raise thousands of dollars a month for
            various groups and organizations.</p>
            <br />
            Please visit our website dedicated to Video Dance Party events to learn more. 
          </div>
          <button 
              @click="vdpTooltip = !vdpTooltip"
              class="relative shadow w-1/4 md:w-1/3 ml-16 mt-4 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red md:py-2">
              <div v-if="vdpTooltip" class="absolute mx-2 bottom-14 shadow-md">
                <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                  This site is under maintenance. Please fill out the form below to get more info.
                  <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                </div>
              </div>
                VISIT SITE
              </button>
        </div>

        <div class="relative">
          
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald text-white">
              <!-- Heroicon name: outline/scale -->
              <!-- <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg> -->
            </div>
            <h3 class="ml-16 text-2xl leading-6 font-medium text-gray-900">Outdoor Movies</h3>
            <h4 class="text-sm ml-16 pt-2 text-emerald font-semibold tracking-wide">
              <span>Festivals | </span>
              <span>Events | </span>
              <span>Schools | </span>
              <span>Corporate | </span>
              <span>Indoors | </span>
              <span>Outdoors | </span>
              <span>Backyards | </span>
              <span>Fundraisers</span>
              </h4>
          
          <div class="mt-2 ml-16 text-base text-gray-500">
            <p>Outdoor movies, big screen gaming, promotions, advertising, presentations are just a few of the exciting possibilities 
            for you to consider. 
            </p>
            <br />
            <p>
              Our Big screen events are larger than life. With our inflatable screens spanning up to 40 feet
              wide and with a height of over 3 storeys! We offer a variety of screen sizes to suit your specific needs 
              and budget. Starting at jsut 8' wide for more intimate crowds. Complimenting our large screens, we also offer an 
              assortment of LED displays.
            </p>
          </div>
          <div class="rounded-md shadow w-1/4 md:w-1/3 ml-16 mt-4">
              <g-link to="/outdoor-movies" class=" uppercase flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-emerald md:py-2">
                visit site
              </g-link>
            </div>
        </div>

        <div class="relative md:pt-4">
          
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky text-white">
              <!-- Heroicon name: outline/lightning-bolt -->
              <!-- <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> -->
            </div>
            <h3 class="ml-16 text-2xl leading-6 font-medium text-gray-900">Plus AV</h3>
            <h4 class="text-sm ml-16 pt-2 text-sky font-semibold tracking-wide">
              <span>Equipment rentals | </span>
              <span>On-site technicians | </span>
              <span>Event consultants | </span>
              <span>Installation services</span>
              </h4>
          
          <div class="mt-2 ml-16 text-base text-gray-500">
            <p>A professional Audio Visual agency that gives your corporate event the look it deserves. It's that simple.</p>
          </div>
          
              <button 
              @click="avTooltip = !avTooltip"
              class="relative shadow w-1/4 md:w-1/3 ml-16 mt-4 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-sky md:py-2">
              <div v-if="avTooltip" class="absolute mx-2 bottom-14 shadow-md">
                <div class="bg-gray-600 text-white text-xs rounded py-1 px-4 bottom-full">
                  This site is under maintenance. Please fill out the form below to get more info.
                  <svg class="absolute text-gray-600 h-2 w-full top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                </div>
              </div>
                VISIT SITE
              </button>
              
            
        </div>
      </div>
    </div>
  </div>
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
        </div>
      </div>
      <div class="mt-5 md:mt-10 p-4 md:col-span-2 max-w-4xl">
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
          method="post">
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
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
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
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
 
  </Layout>
</template>
<script>
export default {
  data: function () {
    return {
      menu: false,
      services: false,
      avTooltip: false,
      vdpTooltip: false
    }
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
