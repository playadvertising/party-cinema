<template>
  <Layout>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
 
      <Nav/>
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span class="block text-yellow-400 xl:inline uppercase">Party Cinemas</span>
          </h1>
          <h2 class="mt-2 font-bold uppercase text-red sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-3xl lg:mx-0">
            Your Big Screen Entertainment Professionals
          </h2>
          <div class="mt-5 sm:mt-8 sm:flex md:flex-wrap sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
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
    <g-image class="w-full object-cover lg:object-contain sm:h-46 lg:w-full lg:h-full" src="../pc-banner.png" alt=""/>
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
            <a>
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="" class="p-1 object-center w-full h-full" src="../facebook.png"/>
              </div>
            </a>
            <a>
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="" class="p-1 object-center w-full h-full" src="../twitter.png"/>
              </div>
            </a>
            </div>
        </div>
      </div>
      <div class="mt-5 md:mt-10 p-4 md:col-span-2">
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
          method="post">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-400 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" autocomplete="subject" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <textarea type="text" name="message" id="message" autocomplete="message" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
import ContactForm from "../components/ContactForm.vue"
import Nav from "../components/Nav.vue"
export default {
  components: {
    ContactForm,
    Nav
  },
  data: function () {
    return {
      menu: false
    }
  },
  metaInfo: {
    title: 'Homepage!'
  }
}
</script>
