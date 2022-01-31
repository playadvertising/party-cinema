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
            Pop-up Drive-ins
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
                <g-image 
                alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
          </a>
          <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image 
                alt="instagram link" 
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
       The Drive In Theatre is popular again!
      </p>
      <p class="mt-4 text-lg lg:mx-auto">
        Fun Fact: Outdoor Movies have been around since the 1930's. The first Drive-in theatre in Canada was opened in Hamilton 1946. <br/><br/>
        Attending a Drive-in theatre today brings back a strong feeling of nostalgia - retro is in! That being said, it's not as easy to locate one anymore. With the advent of digital cinema, many were forced to close their doors as the cost to convert was astronomical. <br /><br/>
        As dusk rolls around, your expected cars will arrive with families inside filled with excitement, adventure and those wonderful feelings of nostalgia. There's a special event happening that families have experienced for multiple generations. The smell of freshly popped popcorn in the air - children having fun with each other or playing catch with parents. The sun is setting and the movie is about to begin. People are tuning in the radio in their car to the broadcast station and everyone is nestled up in their cars or cozied up on lawn chairs with a blanket across their laps ready to enjoy the film - just like their parents, grandparents or even their great grandparents did. Maybe it's their first one - no matter the case, the night is going to be special. The movie will be loved and a new memory will be cherished. <br /><br/>
        Party Cinemas has been providing the Pop-Up Drive-in experience since 2008 and in 2020 with the introduction of social distancing we were already the experts here to help keep the community spirit alive! With hundreds of Drive-In Movie events under our belt, we are able to provide this experience at almost any venue. Let's talk about your vision and help make your special night happen. These events can happen literally anywhere - fields, parking lots, on top of parking garages, airports and even marinas! <br />
      </p> 
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -m-4">
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
            alt="Large panorama of people parked in parking lot at sunset, awaiting an outdoor movie" 
            class="object-cover object-center w-full h-full block" 
            src="../odm4.jpg"/>
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
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image 
            alt="Large screen setup in parking lot with a large concert stage in background" 
            class="object-cover object-center w-full h-full block" 
            src="../odm10.jpg"/>
          </a>
        </div>
      </div>
    </div>
  </div>
    <!-- hr -->
    
  </main>


  <!-- services teal part -->
  <div class="py-12 bg-emerald text-white grid gap-y-4">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-3xl font-bold
      md:text-5xl">
        POP-UP DRIVE-IN EXPERIENCE EXPERTS
      </p>
      <div class="relative flex py-5">
        <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
    </div>
        <div class="pl-4 lg:pl-48 mt-4 text-left">
            <span class="text-xl font-bold
            md:text-2xl">Included in your event is:</span>
          <ul class=" list-disc mt-4">
            <li class="pb-2">Industry leading Airscreen ® inflatable screen (Various sizes Available)</li>
            <li class="pb-2">Ultra-high 20,000 Lumen HD Projection</li>
            <li class="pb-2">Drive-in Audio FM Transmitter for in-vehicle radio reception</li>
            <li class="pb-2">Speaker for general announcments</li>
            <li class="pb-2">Whisper Quiet Honda Power</li>
            <li class="pb-2">Incidental equipment (media player, mic, cables etc)</li>
            <li class="pb-2">Professional AV Technicians will Deliver, Set-Up, Operate and Take Down</li>
            <li class="pb-2">Promotional event posters (printed and digital - on request)</li>
            <li class="pb-2"><bold>Five Million Dollor Liability Insurance</bold></li>
            <li class="pb-2"><bold>Back-up equipment!</bold></li>
          </ul>
        </div>
        <div class="pl-4 lg:pl-48 mt-4 text-left">
            <span class="text-xl font-bold
            md:text-2xl">Optional:</span>
          <ul class=" list-disc mt-4">
            <li class="pb-2">Complete Snack bar (we sell snacks)</li>
            <li class="pb-2">Popcorn machine w/supplies rental (you operate)</li>
          </ul>
        </div>
        <div class="lg:text-center">
      <p class="pt-20 text-3xl font-bold
      md:text-5xl uppercase">
        our stand on covid-19
      </p>
       <p class="mt-4 max-w-5xl text-left lg:text-center text-lg lg:mx-auto">
        With social distancing in place, drive-in movie events are a great escape to enjoy with your family or with a few friends. As we head out on the long path of recovery, people are looking for sparks of normalcy and pop-up drive-in movie events are the perfect COVID-19 safe event to lift spirits and warm hearts.<br /><br />
        All of our technicians are fully vaccinated. Your event, our services and technicians will comply with any current restrictions in place at the time of your event. Please fill out the contact form below or even better, call us at 1-888-853-0053 to have a discussion on how this will look for you.
      </p> 
    </div>
    </div>
  </div>
<!-- hr -->
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
  </div>
    <section
      class="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-10 py-4 "
    >
      
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
    title: 'Drive-in Theatre'
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
}
</script>

