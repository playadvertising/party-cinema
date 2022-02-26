<template>
  <Layout>
  <div class="relative bg-white overflow-hidden ">
  <div class="max-w-7xl mx-auto">
      
 
      <Nav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></Nav>
 
    <div class="relative bg-video-dance bg-cover bg-no-repeat
          overflow-hidden">
        <div class="absolute top-0 opacity-75 h-full w-full bg-gradient-to-tl from-yellow-200 to-red"></div>
            <div class="relative z-20 mt-10 pb-5 md:pb-10 lg:pb-20 max-w-2xl
            px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="text-white z-10">
                <h1 class="text-4xl tracking-tight
                font-extrabold sm:text-5xl md:text-6xl">
                  <span class="block">
                    It’s a Video Dance Party!
                    </span>
                </h1>
                <h2 class="font-bold leading-8 sm:mt-5 
                lg:text-xl text-md">
                 We’ve assembled a team of the most talented DJs & VJs in Canada so we can bring amazing entertainment value to your event. Our team is experienced with youth events, right on up to the full dance club experience.
                </h2>
                </div>
                <div class="mt-5 flex">
                  <div @click="scrollToBottom()" class="mt-3 sm:mt-0">
                    <a href="#" class="w-full flex items-center 
                    justify-center
                    border border-transparent 
                    text-bold font-bold 
                    rounded-full text-red bg-py 
                    hover:bg-white py-4 md:text-xl px-10">
                      Book Us Today <span class="pb-2 pl-2">&darr;</span>
                    </a>
                  </div>
                </div>
              
            </div>
          <div class="absolute top-4 right-4 flex flex-row gap-x-4">
            <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-gradient-to-tl from-yellow-200 to-red rounded opacity-75">
                <g-image alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
            </a>
            <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-gradient-to-tl from-yellow-200 to-red rounded opacity-75">
                <g-image alt="instagram link" 
                class="p-1 object-center w-full h-full" 
                src="../instagram.png"/>
              </div>
            </a>
            </div>
        
    </div>
  </div>
  </div>

  <div class="py-12 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-4xl leading-8 font-bold text-gray-700 sm:text-4xl">
        Fun times and fundraisers
      </p>
       <p class="my-4 leading-8 max-w-2xl text-2xl text-gray-400">
         The video dance party is by far, our most popular event. Weddings, community events, fundraisers, private parties and spectacular school events are all why you should bring video to your next dance party. 
      </p> 
      <g-link 
      to="/video-dance-party-faq"
      class="text-gray-700 cursor-pointer 
      hover:text-red font-bold text-xl">
      Learn more on our FAQ's page <span>&rarr;</span>
      </g-link>
    
  </div>
</div>

<div class="flex py-5 items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>


<div class="py-10 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="text-4xl leading-8 font-bold text-gray-700 sm:text-4xl">
        Community Youth Video Dance Fundraiser Events


      </p>
       <p class="my-4 leading-8 max-w-2xl text-2xl text-gray-400">
         All across Ontario, Party Cinemas has helped communities like yours, raise thousands of dollars for local charities and organizations. Contact us today to learn how we can help support your fundraising efforts.
      </p> 
          <a 
          @click="scrollToBottom()"
          class="text-gray-700 cursor-pointer hover:text-red font-bold text-xl">Contact Us<span>&darr;</span></a>
    
  </div>
</div>

<div class="flex flex-wrap justify-center">
<div class="md:max-w-lg lg:max-w-md px-4 py-4 my-auto hover:-translate-y-1 ease-in transform duration-200 cursor-pointer">
    
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      
        <div 
        class="md:flex-shrink-0">

          <g-image 
          src="../vdp-1.jpg" 
          alt="uploaded cover image"
          class="object-cover h-full w-full rounded-lg rounded-b-none">
          </g-image>
        </div>
      
      
      <div class="py-1 ">
        <div class="p-4">
          <span class="bg-blue-100 rounded p-1">
            <span 
            class="text-blue-500 font-bold text-sm pl-2 pr-56">
              Corporate events</span>
          </span>
          <h2 class="font-bold mb-4 mt-2 
          text-2xl text-gray-800 ">
          Dance like nobody's watching.<span class="text-white">................</span>
          </h2> 
          
        </div>
      </div>
    </div> 
  
  </div>
  <div class="md:max-w-lg lg:max-w-md px-4 py-4 my-auto hover:-translate-y-1 ease-in transform duration-200 cursor-pointer">
    
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      
        <div 
        class="md:flex-shrink-0">

          <g-image 
          src="../video-dance-party-company.jpg" 
          alt="uploaded cover image"
          class="object-cover h-full w-full rounded-lg rounded-b-none">
          </g-image>
        </div>
      
      
      <div class="py-1 ">
        <div class="px-4 py-6">
          <span class="bg-blue-100 rounded p-1">
            <span 
            class="text-blue-500 font-bold text-sm pl-2 pr-56">
              Youth events</span>
          </span>
          <h2 class="font-bold mb-4 mt-2 
          text-2xl text-gray-800 ">
          Fun, community driven events.
          </h2> 
          
          
        </div>
      </div>
    </div> 

  </div>
  
</div>
    <!-- <div class="mt-10">
      <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red text-white">
            
              
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
</div> -->


<div class="flex py-5 items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

    
    <div class="py-12 bg-white text-center">
      <g-image 
      class="mx-auto"
      alt="Party cinema" 
      src="~/party-cinemas-thumbnail-logo.png" 
      width="60" />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <p class="mt-2 text-4xl leading-8 font-bold text-gray-700 sm:text-4xl">
        So many parties, so many happy clients.</p>
        <p class="my-4 leading-8 max-w-2xl text-2xl text-gray-400">
        The proof is in the pudding, so they say. For close to 20 years, Party Cinemas has been entertaining crowds of all sizes – and it’s starting to add up!
        </p>
        <div class="text-red font-extrabold text-4xl">600</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Video dance parties
        </div>
        <div class="text-red font-extrabold text-4xl">2300</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Drive-in movie nights
        </div>
        <div class="text-red font-extrabold text-4xl">All of them</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Happy clients
        </div>
    </div>
  </div>


  <!-- testimonial area -->
  
  <div class="mb-4 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Oliver Ward (Oliwoodfilms)
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
        "I run a film festival in Huntsville called CineMuskoka. Anthony and his team installed their larger than life 40 foot inflatable screen right in the center of town in our Park. It was incredible! Amazing quality and a spectacle for passersby. The screen itself acted as advertising for our event. I can highly recommend Party Cinemas as a professional, easy to work with company. We will definitely be using them again."
        </p>  
   
  </div>
</div>

<div class="mb-4 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Geoff And Dena Silverberg
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
        "Wow! what an incredible night. Thank you Anthony for making my son's 16th birthday a one of kind outstanding event! Anthony showed up early, ensured everything was working and returned promptly to remove. He was gracious and responded to every question I had regarding the event. A truly wonderful one of kind birthday! Thank you Anthony and Party Cinemas!"      
          </p>  
   
  </div>
</div>

<div class="mb-8 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Halton Agricultural Society
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
      "Party Cinemas was a pleasure to work with. Excellent service from bookings, day of events and follow up! Thank you for making our first year of Flicks @ the Fairgrounds a success!"
       </p>  
   
  </div>
</div>
  <ContactForm />
  <Footer />
  </Layout>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
export default {
  components: { Nav, ContactForm, Footer },
  data: function () {
    return {
      
    }
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
  metaInfo: {
    title: 'Video Dance Party'
  }
}
</script>
