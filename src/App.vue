<template>
  <div id="app">
    <b-container>
      <b-input-group class="my-3">
        <b-form-input type="search" placeholder="Search terms"></b-form-input>
      </b-input-group>
      <b-row>
        <b-col cols="3">
          <b-card class="text-center">
            <div class="bg-secondary text-light">
              This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
              <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
              gray <samp>&lt;div&gt;</samp>.
              This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
              <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
              gray <samp>&lt;div&gt;</samp>.
              This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
              <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
              gray <samp>&lt;div&gt;</samp>.
            </div>
          </b-card>
        </b-col>
        <b-col cols="9">
          <div class="row mb-3">
            <router-link to="/first" :class='"btn btn-outline-secondary btn-sm mr-3"'>First</router-link>
            <router-link to="/second" :class='"btn btn-outline-secondary btn-sm"'>Second</router-link>
          </div>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
