<template>
  <Layout>
  <div class="relative bg-white overflow-hidden ">
  <div>
      
 
      <Nav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></Nav>
 
    <div class="relative bg-odm-faq bg-cover lg:h-screen bg-clip-padding bg-no-repeat
          overflow-hidden">
        <div class="absolute top-0 opacity-75 h-full w-full bg-gradient-to-tl 
        from-yellow-200 to-red"></div>
            <div class="relative z-20 pb-20 md:pb-20 lg:pb-36 max-w-4xl mx-auto
            px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="text-white z-10">
                <h1 class="text-4xl tracking-tight
                font-extrabold sm:text-5xl md:text-6xl">
                  <span class="block">
                    Frequently Asked Questions. 
                    </span>
                </h1>
                <h2 class="font-bold leading-8 sm:mt-5 
                lg:text-xl text-md">
                  You have questions? We have answers.
                </h2>
                </div>
                <div class="mt-36 flex">
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

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl leading-10 font-bold text-gray-700 sm:text-4xl">
        Where can you set up your outdoor movie event?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
        We can set up our Outdoor Movie services events anywhere. Park spaces and fields are most common, but your imagination is the only limit for us. Rooftops, barges, backyards, pools, lakes, beaches, concrete, artificial turf, you name it! Our Outdoor movie screens can be placed almost anywhere you want.
      </p> 
  </div>
</div>

<div class="flex items-center">
  <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl leading-10 font-bold text-gray-700 sm:text-4xl">
        Can you do outdoor movies during the day?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         Inflatable outdoor movie screens use projection. For this reason, you aren’t able to start your outdoor screening event until sunset as they haven’t invented projectors that can compete with daylight. LED display screens are an option of course, but there is a substantial cost increase.
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl leading-10 font-bold text-gray-700 sm:text-4xl">
        Are you able to do outdoor film screenings in all weather?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         We are able to execute outdoor screening events in rain and snow, but it does have to be light in nature. Anything more and it’s just not a pleasant experience for everyone. Wind is also a factor to consider. Inflatable movie screens are giant sails and while we do secure our movie screens with the greatest amount of safety in mind, they do have limits.
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl leading-10 font-bold text-gray-700 sm:text-4xl">
        Can you show more than movies on your inflatable screens?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         Yes!<br/>
        With our outdoor screen systems we are able to project virtually any content. We’ve hosted UFC matches, screened hockey and basketball games, corporate events, video dance party events and live streaming to name just a few uses for our outdoor movie services.
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl leading-10 font-bold text-gray-700 sm:text-4xl">
        Do we need a license to screen outdoor movies?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
        To screen outdoor movies anywhere else besides your own personal backyard you will need a public performance license to screen your movie outdoors legally. This includes any of the following regardless of size or location – free, non-profit, community events, corporate events including but not limited to street party events. We don’t issue licenses for outdoor movie events but we are happy to obtain them on your behalf.
      </p> 
      
  </div>
  <div @click="scrollToBottom()" class="mt-3 sm:mt-0 ml-8 lg:ml-20 max-w-md">
                    <g-link class="w-full flex items-center 
                    justify-center
                    border border-transparent 
                    text-bold font-bold 
                    rounded-full text-red bg-py 
                    hover:bg-red
                    hover:text-py uppercase
                     py-4 md:text-xl px-10">
                      view our movie license page
                       <span class="pb-2 pl-2">&rarr;</span>
                    </g-link>
                  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>
        
    
  </div>
  </div>

  <div class="py-12 bg-white text-gray-900 grid">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="mt-2 pb-4 text-4xl font-bold
      md:text-6xl">
        just some of our <br/> amazing clients
      </p>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-1.jpg" alt="three logos: Amica senior lifestyles, Bell, Brock University"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-2.jpg" alt="three logos: City of Burlington, Canadian Cancer Society, Town of Halton Hills"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-3.jpg" alt="three logos: City of Brampton, University of Guelph, Lilly"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-4.jpg" alt="three logos: Jays Care  Foundation, Pepsico, JDRF"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-5.jpg" alt="three logos: Western University, York University, University of Waterloo"/>
    </div>
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
    title: 'Outdoor Movies FAQs'
  }
}
</script>
