<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUser);
</script>
<template>
  <div class="row justify-content-center pt-5 pb-5">
    <div class="col-12">
      <div class="row w-100 m-0">
        <div class="d-flex align-items-center align-self-center justify-content-center rounded-circle bg-secondary mx-3" style="width: 100px; height: 100px;">
          <font-awesome-icon class="text-white" icon="fa-solid fa-user" size="3x"/>
        </div>
        <div class="col-auto py-3 px-4">
          <h3>{{ user_data.first_name }} {{ user_data.last_name }}</h3>
          <p>{{ user_data.email }}</p>
          <p>{{ user_data.city }}, {{ user_data.country }}, {{ user_data.zipCode }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {faker} from '@faker-js/faker';

export default {
  name: "UserProfile",
  mounted(){
    this.generateUser();
  },
  methods: {
    generateUser: function (){
      const user_data = {};

      user_data.first_name = faker.name.firstName();
      user_data.last_name = faker.name.lastName();
      user_data.email = faker.internet.email();
      user_data.city = faker.address.city();
      user_data.country = faker.address.county();
      user_data.zipCode = faker.address.zipCode();

      return{
        user_data
      }
    },
  },
  data(){
    const user_data = {};

    user_data.first_name = faker.name.firstName();
    user_data.last_name = faker.name.lastName();
    user_data.email = faker.internet.email();
    user_data.city = faker.address.city();
    user_data.country = faker.address.county();
    user_data.zipCode = faker.address.zipCode();

    return{
      user_data
    }
  }
};
</script>