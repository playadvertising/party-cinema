<template>
  <div class="font-Quicksand">
   
    <slot/>
  </div>
</template>
 
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
