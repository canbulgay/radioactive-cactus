<template>
  <app-header />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />

  <app-bookmark-list :items="bookmarkList" />
  </div>

</template>

<script>
import Sidebar from "@/components/Home/Sidebar"
export default {
  components: {
    Sidebar
  },
  data(){
    return {
      bookmarkList : []
    }
  },
  created(){
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      console.loog(bookmark_list_response);
      this.bookmarkList = this.bookmark_list_response.data || []
    })
  },
  methods : {
    updateBookmarkList(categoryId){
      this.$appAxios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`).then(bookmark_list_response => {
      console.loog(bookmark_list_response);
      this.bookmarkList = this.bookmark_list_response.data || []
    })
    }
  }
}
</script>
