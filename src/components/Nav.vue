<template>
<div>
        <div class="relative z-50 pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full lg:w-auto">
                <g-link to="/">
                  <span class="sr-only">party cinema</span>
                  <g-image 
                  alt="Party cinema" 
                  src="~/party-cinemas-logo.png" 
                  width="100" />
                  <!-- <img class="h-8 w-auto sm:h-10" src="./srv/"> -->
                </g-link>
                <div class="-mr-2 flex items-center lg:hidden">
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
            <div class="hidden lg:block lg:ml-10 lg:pr-4 lg:space-x-8">
                <g-link class="font-medium text-gray-500 hover:text-gray-900"
                to="/">
                Home</g-link>
                <span 
                @click="odmDrop = !odmDrop"
                class="relative cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                  Outdoor Movies ▼
                </span>
                <div v-if="odmDrop" class="absolute shadow-md p-4 top-8 z-10 bg-white w-56">
                  <g-link class="font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies/">
                  Outdoor Movies</g-link>
                  <g-link class="my-4 font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies-drive-in-theatre/">
                  Pop-up Drive-in</g-link>
                  <g-link class="font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies-backyard-experience/">
                  Backyard Experience</g-link>
                  <g-link class=" my-4 font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies-movie-licensing/">
                  Movie Licensing</g-link>
                  <g-link class="font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/outdoor-movies-faq/">
                  FAQs</g-link>
                </div>
                <span 
                @click="vdpDrop = !vdpDrop"
                class="relative cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                  Video Dance Party ▼
                </span>
                <div v-if="vdpDrop" class="absolute shadow-md p-4 top-8 right-96 z-10 bg-white w-56">
                  <g-link class="font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/video-dance-party">
                  Youth & School Events</g-link>
                  <g-link class="my-4 font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/video-dance-party">
                  Corporate Events</g-link>
                  <g-link class="font-medium block text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  to="/video-dance-party-faq">
                  FAQs</g-link>
                </div>
                <a class="font-medium text-gray-500 hover:text-gray-900"
                href="https://plusav.ca/">
                PlusAV.ca</a>
                <a class="font-medium text-gray-500 hover:text-gray-900"
                href="https://www.studiostream.ca/">
                StudioStream.ca</a>
                <div class="font-medium inline-block cursor-pointer text-gray-500 hover:text-gray-900"
                @click="$emit('scroll')">
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
        <div v-if="menu" class="fixed z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div class="rounded-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
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
            <div class="px-2 pt-2 pb-3 h-auto bg-gray-50 z-40 space-y-1">
              <g-link class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                to="/">
                Home</g-link>
                
                <span class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 bg-gray-100">
                  OutdoorMovies 
                </span>
                <div class="px-6">
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                    text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/">
                  Outdoor Movies</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/outdoor-movies/">
                  Pop-up Drive-in</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/">
                  Backyard Experience</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/">
                  Movie Licensing</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/outdoor-movies-faq/">
                  FAQs</g-link>
                </div>  

                <span class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 bg-gray-100">
                  Video Dance Party 
                </span>
                <div class="px-6">
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/video-dance-party/">
                  Youth & School Events</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/video-dance-party/">
                  Corporate Events</g-link>
                  <g-link class="block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  to="/video-dance-party-faq">
                  FAQs</g-link>
                </div>  
                <div class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                @click="$emit('scroll')">
                PlusAV.ca</div>
                <div class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                @click="$emit('scroll')">
                StudioStream.ca</div>
                <div class="block px-3 py-2 rounded-md text-base font-medium
                text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                @click="$emit('scroll')">
                Contact</div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>

export default {
  
  data: function () {
    return {
      menu: false,
      odmDrop: false,
      vdpDrop: false
    }
  },
}
</script>