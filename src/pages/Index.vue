<template>
  <Layout>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
 
      <div>
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">party cinema</span>
                  <g-image alt="Party cinema" src="~/party-cinemas-thumbnail-logo.png" width="60" />
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
                <g-link class="font-medium text-gray-500 hover:text-gray-900"
                to="/">
                About</g-link>
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
                <g-link class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                to="/">
                About</g-link>
            </div>
          </div>
        </div>
      </div>
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block text-yellow-400 xl:inline">Party Cinemas</span>
          </h1>
          <h2 class="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Your Big Screen Entertainment Professionals
          </h2>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red hover:bg-black md:py-4 md:text-lg md:px-10">
                Check out our services
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red bg-yellow-400 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <g-image class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../inflatable-screen-rental.jpg" alt=""/>
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
          <div class="rounded-md shadow w-1/4 md:w-1/3 ml-16 mt-4">
              <a href="#" class=" uppercase flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red md:py-2">
                visit site
              </a>
            </div>
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
              <a href="#" class=" uppercase flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-emerald md:py-2">
                visit site
              </a>
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
          <div class="rounded-md shadow w-1/4 md:w-1/3 ml-16 mt-4">
              <a href="#" class=" uppercase flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-sky md:py-2">
                visit site
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
<ContactForm />
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
 
  </Layout>
</template>
 
<script>
import ContactForm from "../components/ContactForm.vue"
export default {
  components: {
    ContactForm
  },
  data: function () {
    return {
      menu: false
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
