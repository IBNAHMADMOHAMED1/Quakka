<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    viewBox="0 0 960 200"
    :speed="1.2"
    primaryColor="#8289bf"
    secondaryColor="#ecebeb"
  >
    <rect x="141" y="28" rx="0" ry="0" width="77" height="2" /> 
    <rect x="101" y="93" rx="0" ry="0" width="35" height="36" /> 
    <rect x="150" y="91" rx="0" ry="0" width="35" height="37" /> 
    <rect x="99" y="47" rx="0" ry="0" width="35" height="12" /> 
    <rect x="106" y="107" rx="0" ry="0" width="20" height="2" /> 
    <rect x="145" y="47" rx="0" ry="0" width="35" height="12" /> 
    <rect x="152" y="107" rx="0" ry="0" width="20" height="2" /> 
    <rect x="215" y="73" rx="0" ry="0" width="19" height="56" /> 
    <rect x="240" y="73" rx="0" ry="0" width="20" height="56" /> 
    <rect x="187" y="46" rx="0" ry="0" width="35" height="14" /> 
    <rect x="233" y="46" rx="0" ry="0" width="35" height="13" /> 
    <rect x="240" y="106" rx="0" ry="0" width="20" height="2" /> 
    <rect x="168" y="34" rx="0" ry="0" width="27" height="1" />
  </content-loader>
</template>
