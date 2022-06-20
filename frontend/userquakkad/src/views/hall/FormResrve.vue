<template>
    <div class="comment-form">
        <h3 class="comment-reply-title">Send a demand to Reserve</h3>
        <div v-if="!isLoggedIn">
            <p>You must be logged in to send a demand to Reserve.</p>
            <p>
                <router-link to="/login">Login</router-link>
                or
                <router-link to="/register">Register</router-link>
            </p>

        </div>

        <form v-if="isLoggedIn">
            <div class="row">
                <div v-for="(item, index) in formData" :key="index" class="col-lg-6 col-12">
                    <div class="form-box form-group">
                        <label class="form-label" for="">{{ item.name }} :</label>
                        <input :type="item.type" name="name" v-model="item.value"
                            class="form-control form-control-custom" :placeholder="item.placeholder" :min="item.min"
                            :max="item.max" />
                    </div>

                </div>
                <div class="col-12">
                    <div class="form-box form-group">
                        <textarea name="#" class="form-control form-control-custom" v-model="message"
                            placeholder="Your Message"></textarea>
                    </div>
                </div>

                <div class="col-12">
                    <div class="button">
                        <button @click.prevent="createReserve" type="submit" class="btn">
                        Send Demand
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: "FormResrve",
    props: {
        id : {
            type: Number,
            required: true
        },
    },
  data() {
    return {
      formData: [
        {
          name: "date departure",
          type: "date",
          placeholder: "Date Departure",
          value: "date_departure",
          min: `${
            new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0]
                  }`,
          max: '',
        },
        {
          name: "Date Arrival",
          type: "date",
          placeholder: "Date Arrival",
          value: "date_arrival",
          min: `${
            new Date(new Date().getTime() + 72 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0]
                }`,
            max: '',
        },
        {
          name: "number of guests",
          type: "number",
          value: "number_of_guests",
          min: 1,
          max: 40,
          placeholder: "Number of Guests",
        }
        ],
        message: "",
        isLoggedIn: false,
    };
    },
    methods: {
        createReserve() {
            const client = JSON.parse(JSON.stringify(localStorage.getItem("client")));
            console.log(JSON.parse(client));
            const data = {
                date_departure: this.formData[0].value,
                date_arrival: this.formData[1].value,
                number_of_guests: this.formData[2].value,
                message: this.message,
                id_hall: this.id,
                id_client: JSON.parse(client).id
            }
        if (data.date_departure && data.date_arrival && data.number_of_guests && data.message && data.id_hall && data.id_client) 
                this.$store.dispatch("createReserve", data);
        else
            Swal.fire({ title: "Error", text: "Please fill all fields",  icon: "error", confirmButtonText: "Ok",});
      },
    },
    mounted() {
        if (localStorage.getItem('client') || this.$store.getters.isLoggedIn) 
            this.isLoggedIn = true;
    }

};
</script>
