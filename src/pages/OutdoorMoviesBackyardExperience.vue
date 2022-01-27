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
            The ultimate backyard cinema experience  
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
                <g-image alt="" class="p-1 object-center w-full h-full" src="../facebook.png"/>
              </div>
          </a>
          <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image alt="" class="p-1 object-center w-full h-full" src="../instagram.png"/>
              </div>
          </a>
          </div>
  </div>

  <main class="py-12 bg-py text-gray-900 grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-4xl font-extrabold
      md:text-5xl uppercase">
        enjoy the red carpet treatment at home!
      </p>
       <p class="mt-4 max-w-7xl text-left text-lg lg:mx-auto">
         You've decided to have an event at your home or cottage. Perhaps it's a backyard movie, a UFC fight, a concert, or maybe some fun family video and photo memories. With three service types available for backyard screening events we have you covered. Out most luxurious offering is a complete pampering of our services. We roll out the red carpet for this one! Our professional crew member(s) will arrive at your residence, set up the screen, set up your red carpet for guests to arrive on and start the popcorn machine with some fresh authentic theatre popcorn for you and your guests to enjoy while the screening starts as dusk begins. You will be the envy of the neighbourhood with a 16' movie screen complete with HD projection and a full-range sound system and all you have to do is sit back and enjoy the company of your guests. Our crew member(s) will ensure your event runs seamless and operate everything from start to finish. We also offer two DIY  kits with delivery and pick up included. Our crew member will deliver all the necessary equipment for you to set up and operate your very own backyard event. We will include everything you need to get things going. Instructions are included, but if you get stuck we are only a phone call away. Out most basic package does not include a screen - you may want to project on the side of your house, garage or bedsheet if you wish!    
      </p> 
    </div>
  </div>
    <!-- hr -->
    <div class="relative flex py-5">
      <span class="w-10/12 invisible lg:visible mx-auto border-t-2 border-gray-800"></span>
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm5.jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm6.jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm-by1 (1).jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm-by1 (2).jpg"/>
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-4xl font-extrabold
      md:text-5xl uppercase">
        our stand on covid-19
      </p>
       <p class="mt-4 max-w-5xl text-left text-lg lg:mx-auto">
         With social distancing in place and limits in gathering sizes, backyard events are a great escape to enjoy with your family or with a few friends. As we head out on the long path of recovery, people are already looking for sparks of normalacy and backyard movie rentals are the perfect COVID-19 safe event to lift spirits and warm hearts. Your event, our services and staff will comply with any current restrictions in place at the time of your event. All equipment is completely sanitized after each event. Please fill out the contact form below or event better, call us at 1-888-853-0053 to have a dsicussion on how this will look for you.  
      </p> 
    </div>
  </div>
  </main>


  <!-- services teal part -->
  <div class="py-12 bg-emerald text-white grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        PLAN YOUR EVENT
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
          <h2 class="flex justify-center font-bold text-2xl">
          DIY Kit with Screen
          </h2>
          <span class="text-sm">Starting at $345 + HST</span>
        </div>
        <div class="p-4 ">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">Backyard Series Inflatable Screen</li>
            <li class="pb-4">HD Projection (5,000 lumens)</li>
            <li class="pb-4">Professional Sound</li>
            <li class="pb-4">HDMI Input for your Devices</li>
            <li class="pb-4">Incidental Equipment (cables etc)</li>
            <li class="pb-4">Blu-Ray/DVD Player</li>
            <li class="pb-4">Overnight Rental</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 uppercase text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Event!
            </button>
          </div>
        </div>
      </article>
  
      <article
        class="bg-white border border-gray-600 w-8/12 lg:w-full mb-4"
      >
        <div class="w-full py-4 bg-gray-700 text-center">
          <h2 class="flex justify-center font-bold text-2xl">
          Red Carpet Services
          </h2>
          <span class="text-sm">Starting at $880 + HST</span>
        </div>
        <div class="p-4">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">Premium 16' Inflatable Screen</li>
            <li class="pb-4">HD Projection</li>
            <li class="pb-4">Full-range Sound System</li>
            <li class="pb-4">Blu-Ray Player or Media Device (event dependent)</li>
            <li class="pb-4">Incidental Equipment</li>
            <li class="pb-4">Popcorn Machine w/Unlimited Popcorn</li>
            <li class="pb-4">Red Carpet Entrance w/Stanchions (space permitting)</li>
            <li class="pb-4">Portable Power (if required)</li>
            <li class="pb-4">Delivery, Set Up, Operation, Take Down</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 uppercase text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Event!
            </button>
          </div>
        </div>
      </article>

      <article
        class="bg-white border border-gray-600 w-8/12 lg:w-full"
      >
        <div class="w-full py-4 bg-gray-700 text-center">
          <h2 class="flex justify-center font-bold text-2xl">
          DIY Barebones
          </h2>
          <span class="text-sm">Starting at $245 + HST</span>
        </div>
        <div class="p-4 ">
          <ul class="text-gray-900 text-xs list-disc pl-12">
            <li class="pb-4">Professional Speaker</li>
            <li class="pb-4">HD Projection (5,000 lumens)</li>
            <li class="pb-4">HDMI Input for Your Devices</li>
            <li class="pb-4">Blu-Ray/DVD Player</li>
            <li class="pb-4">Incidenental Equipment (cables etc)</li>
            <li class="pb-4">Overnight Rental</li>
          </ul>
          <div class="text-center">
            <button
              class="bg-gray-700 uppercase text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold rounded"
              >Book this Event!
            </button>
          </div>
        </div>
      </article>
    </section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2">
        We also appreciate that every event is unique. If you feel that you don't fall into any of these categories, please connect with us and we will be happy to customize a package suited to your vision and budget. We want to make sure we are able to service any level of client and their needs.
      </p>
      <p class="mt-2"> 
        Our red carpet service is for up to two films or 4 hours of 'play time'. DIY kits are overnight rentals with pickup in the AM the following day. None of the above servicesare to be used for and street party or community event as movie licensing is required by law for such events with heavy fines for those that do not obtain one. Please ask us for pricing on street party or community events.
      </p>
    </div>
  </div>
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
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm1.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm2.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm3.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm4.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm5.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm6.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm7.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" class="object-cover object-center w-full h-full block" src="../odm8.jpg"/>
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
        <form action="https://api.form-data.com/f/y4sv2h7mot1k2dezosxoe"
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
    title: 'Backyard Experience'
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
}
</script>

