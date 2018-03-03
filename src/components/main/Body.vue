<template>
  <div>
    <ul>
      <li v-for="address in addressList" v-bind:key="address">
        {{ address }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: []
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      var latitude = position.coords.latitude,
          longitude = position.coords.longitude;

      var self = this;
      naver.maps.Service.reverseGeocode({
        location: new naver.maps.LatLng(latitude, longitude),
      }, function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert('Something Wrong!');
        }

        var items = response.result.items;

        for (var i = 0, ii = items.length, item, addrType; i < ii; i++) {
          item = items[i];
          if (self.addressList.includes(item.address) === false) {
            self.addressList.push(item.address);            
          }
        }
      });
    });
  }
}
</script>

<style>

</style>
