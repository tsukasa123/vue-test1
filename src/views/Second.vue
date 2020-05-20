<template>
  <div class="row">
    <div
      :class="[isVisible ? 'bg-secondary' : 'bg-light', 'border', 'p-2', 'text-center', 'text-light']"
      style="height: 400px; overflow-y: scroll;"
    >
      <p>{{ text }}</p>
      <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur commodo
        non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum
        commodo tempor sunt in proident. Non elixir food exorcism nacho tequila tasty.
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur commodo
        non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum
        commodo tempor sunt in proident. Non elixir food exorcism nacho tequila tasty.

      `
    }
  },
  methods: {
    handleVisibility (isVisible) {
      this.isVisible = isVisible
    }
  }
}
</script>
