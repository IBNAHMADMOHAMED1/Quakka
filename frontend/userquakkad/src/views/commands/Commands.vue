<template>
    <div class="shopping-cart section">
        <div class="container">
            <div class="cart-list-head">

                <!-- Cart List Title -->
                <div class="cart-list-title">
                    <div class="row">
                        <div class="col-lg-2 col-md-1 col-12">

                            <p> Hall Name</p>
                        </div>

                        <div class="col-lg-2 col-md-2 col-12">
                            <p>
                                Date Departure
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>
                                Date Arrival
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>
                                Number of Guests
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>
                                Status
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Remove</p>
                        </div>
                    </div>

                </div>
                <div class="cart-single-list">
                    <div v-if="loading" class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    <div v-if="Commands.length == 0">
                        <div class="text-center">
                            <h3>No Commands</h3>
                        </div>
                    </div>
                    <div v-for="(item, index) in Commands" :key="index" class="row align-items-center">


                        <div>
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-12">

                                    <p>
                                        {{ item.hall[0].name }}
                                    </p>
                                </div>

                                <div class="col-lg-2 col-md-2 col-12">
                                    <p>
                                        {{
                                        dateFormat(item.date_departure)
                                        }}
                                    </p>
                                </div>
                                <div class="col-lg-2 col-md-2 col-12">
                                    <p>
                                        {{
                                        dateFormat(item.date_arrival)
                                        }}
                                    </p>
                                </div>
                                <div class="col-lg-2 col-md-2 col-12">
                                    <p>
                                        {{ item.number_of_guests }}
                                    </p>
                                </div>
                                <div class="col-lg-2 col-md-2 col-12">
                                    <p :class="item.status == 'pending' ? 'text-warning' : 'text-success'">
                                        {{ getSatusCommand(item.status)}}
                                    </p>
                                </div>
                                <div @click="removeItem(item.id)" class="col-lg-1 col-md-2 col-12">
                                    <div class="remove-item"><i class="lni lni-close"></i></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-12">

                    <div class="total-amount">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="right">
                                    <PricingTable></PricingTable>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {{ Commands }}
</template>


<script>
import Swal from 'sweetalert2';
import ContentLoader from 'vue-content-loader';
export default {
    name: "Commands",
    components: { ContentLoader},
    data() {
        return {
            Commands: [],
            loading: true,
        };
    },
    methods: {
        dateFormat(date) {
            var d = new Date(date);
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        },
        getSatusCommand(status) {
            if (status == 0)
                return "Pending";
            else if (status == 1) 
                return "Confirmed";
        },
        removeItem(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.$store.dispatch('removeCommand', id);
                    this.Commands = this.Commands.filter(item => item.id !== id);
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        },
    },
    mounted() {
        const client = JSON.parse(JSON.stringify(localStorage.getItem("client")));
        this.$store.dispatch("getCommands",JSON.parse(client).id);
        setTimeout(() => {
            this.Commands = this.$store.state.commands;
            this.loading = false;
        }, 1400);
    }
}
</script>