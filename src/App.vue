<template>
  <router-view />
</template>

<script setup>
import { useAuth } from "./auth";

useAuth(); 
</script>

<script>
export default {
  name: "App"
};
</script>

<style>
@import '@/assets/fonts.css';

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
