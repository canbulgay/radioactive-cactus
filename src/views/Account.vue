<template>
    <app-header />
  <div class="flex flex-row">
    <side-bar></side-bar>
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
</div>
</template>

<script>
import sideBar from "@/components/Account/sideBar.vue"
export default {
    components : {
        sideBar,
    },
    data(){
    return {
      bookmarkList : []
    }
  },
  created(){
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      console.log(bookmark_list_response);
      this.bookmarkList = this.bookmark_list_response.data || []
    })
  },
}
</script>