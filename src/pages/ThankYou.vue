<template>
  <Layout>
      <div class="bg-gray-700 text-white h-screen overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center ">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl py-20">
        Thanks! We will get back to you within 24 hours.
      </p>
       
      <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <g-link to="/outdoor-movies" class="w-full flex items-center 
              justify-center px-8 py-3 
              border border-transparent 
              text-bold font-bold 
              rounded text-black bg-py 
              hover:bg-yellow-200 md:py-4 md:text-xl md:px-10">
                Click here to look around some more
              </g-link>
            </div>
          </div>
    </div> 
  </div>

      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Form Submitted'
  },
}
</script>

