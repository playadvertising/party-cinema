<template>
  <div class="flex w-full flex-nowrap justify-between p-2 bg-red">
    <span class="text-white text-lg">
      Servicing all of Ontario and Quebec. Based out of Milton.
      <br />
      Copyright © 2024 Party Cinemas. All rights reserved.
    </span>
    <div class="flex flex-row gap-x-4">
      <a href="https://www.facebook.com/partycinemas/">
        <div class="w-8 md:w-12 bg-yellow-400 rounded">
          <g-image
            alt="facebook link"
            class="p-1 object-center w-full h-full"
            src="../facebook.png"
          />
        </div>
      </a>
      <a href="https://www.instagram.com/partycinemas/?hl=en">
        <div class="w-8 md:w-12 bg-yellow-400 rounded">
          <g-image
            alt="instagram link"
            class="p-1 object-center w-full h-full"
            src="../instagram.png"
          />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
};
</script>
