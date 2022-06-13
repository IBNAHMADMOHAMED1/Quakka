<template>
    <div>
        <Main>

            <BreadCrumb :items="['Home', 'Products']" />

            <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
                <h1 class="text-3xl py-4 border-b mb-10">
                    orders List
                </h1>
                <div v-if="loading">
                    <Loading />
                </div>
                <div v-else class="mb-4 flex justify-between items-center">
                    <div class="flex-1 pr-4">
                        <div class="relative md:w-1/3">
                            <input type="search" v-model="search" @keypress="searchKeyPress" class="
                  w-full
                  pl-10
                  pr-4
                  py-2
                  rounded-lg
                  shadow
                  focus:outline-none focus:shadow-outline
                  text-gray-600
                  font-medium
                " placeholder="Search..." />
                            <div class="absolute top-0 left-0 inline-flex items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400"
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div v-if="!loading" class="overflow-x-auto rounded-lg shadow overflow-y-auto relative">
                    <div class="flex flex-col mt-8">
                        <div class="
                py-2
                -my-2
                overflow-x-auto
                sm:-mx-6 sm:px-6
                lg:-mx-8 lg:px-8
              ">
                            <div class="
                  inline-block
                  min-w-full
                  overflow-hidden
                  align-middle
                  border-b border-gray-200
                  shadow
                  sm:rounded-lg
                ">
                                <table class="min-w-full">
                                    <thead>
                                        <tr>
                                            <th v-for="(header, index) in th_table" :key="index" class=" px-6 py-3 text-xs font-medium  leading-4 tracking-wider
                          text-left text-gray-500
                          uppercase
                          border-b border-gray-200
                          bg-gray-50
                        ">
                                                {{ header.name }}

                                            </th>
                                        </tr>



                                    <tbody v-if="orders.length == 0 && !searchIsLoading" class="
                      text-center
                       p-5
                       w-1/2
                       ">
                                        <div class="text-gray-600">
                                            No data
                                            <div class="text-gray-600">
                                                <Loading />
                                            </div>
                                        </div>
                                    </tbody>
                                    </thead>

                                    <tbody class="bg-white">

                                        <tr v-for="(order, index) in orders" :key="index">
                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-900">
                                                    {{ order.client.username }}
                                                </div>
                                            </td>
                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-900">
                                                    {{ order.client.email }}
                                                </div>
                                            </td>

                                            <td :class="` ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ order.shipping.mailing_address }}
                                                </div>
                                            </td>

                                            <td :class="`${default_ClassName}`">
                                                <span
                                                    :class="` inline-flex px-2 text-xs font-semibold leading-5   ${creat_status_class}`">
                                                    <span class="ml-1">
                                                        {{ order.client.phoneNumber }}
                                                    </span>
                                                </span>
                                            </td>
                                            <td :class="`${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ order.shipping.shipping_name ? order.shipping.shipping_name :
                                                            '-Default shipping'
                                                    }}

                                                </div>
                                            </td>
                                            <td :class="`${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{
                                                            order.shipping.city
                                                    }}
                                                </div>
                                            </td>
                                            <td :class="` ${default_ClassName}`">
                                                <div class=" text-sm leading-5 whitespace-no-wrap text-gray-500">
                                                    <span @click="listOfProducts(order.listOfProducts)"
                                                        class="cursor-pointer bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                        view list
                                                    </span>

                                                </div>
                                            </td>


                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <span
                                                    :class="`bg-${creat_status_class}-100 text-${creat_status_class}-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`">
                                                    {{
                                                            statusOfOreder("pending")
                                                    }}</span>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    </div>
</template>

<script>
import store from "@/store";
import Main from "@/components/Main.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import LinkIcon from "@/components/icons/LinkIcon.vue";
import Loading from "@/components/base/Loading.vue";
import Swal from "sweetalert2";
import BreadCrumb from "@/components/base/BreadCrummb.vue";
import emailjs from "emailjs-com";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
    name: "createProduct",
    components: {
        Main,
        EditIcon,
        TrashIcon,
        LinkIcon,
        Loading,
        BreadCrumb,
    },
    data() {
        return {
            loading: true,
            open_modal: false,
            default_ClassName:
                "px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200",
            sourceImages: "../../assets/img/product/",
            th_table: [
                { name: "client Name" },
                { name: "Clinet Email" },
                { name: " mailing address" },
                { name: "phone Number" },
                { name: "shipping Name" },
                { name: "City" },
                { name: "list Of Product" },
                { name: "status" },
            ],
            orders: [],
            creat_status_class: "bg-red-100 ",
            images: [],
            search: "",
            searchIsLoading: false,
        };
    },
    methods: {
        date_format(date) {
            return moment(date).format("DD/MM/YYYY");
        },

        getorders() {
            alert("get orders");
            const params = { model: "orders" };
            store.dispatch("getAll", params);
            setTimeout(() => {
                this.orders = this.$store.getters.orders;
                this.loading = false;
            }, 1000);
        },
        statusOfOreder(status) {
            if (status == "pending") {
                this.creat_status_class = "orange";
                return "Pending";
            } else if (status == "completed") {
                this.creat_status_class = "green";
                return "Completed";
            }
        },
        listOfProducts(listOfProducts) {
            this.$store.commit("setListOfProducts", listOfProducts);
            this.$router.push({
                name: "listOfProducts",
            });
        },
    },

    computed: {
        ...mapGetters(["orders"]),
    },

    mounted() {
        const params = { model: "orders" };
        store.dispatch("getAll", params);
        setTimeout(() => {
            this.orders = store.state.orders;

            this.loading = false;
        }, 1300);
        this.orders = JSON.parse(localStorage.getItem("orders"));
        console.log(this.orders);
    },
};
</script>
