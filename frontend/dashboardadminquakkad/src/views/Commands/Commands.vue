<template>
    <div>
        <Main>

            <BreadCrumb :items="['Home', 'Products']" />

            <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
                <h1 class="text-3xl py-4 border-b mb-10">Commands List</h1>
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
                                            <th v-for="(header, index) in th_table" :key="index" class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          leading-4
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                          border-b border-gray-200
                          bg-gray-50
                        ">
                                                {{ header.name }}

                                            </th>
                                        </tr>


                                    <tbody v-if="commands.length == 0 && !searchIsLoading" class="
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

                                        <tr v-for="(command, index) in commands" :key="index">
                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-900">
                                                    {{ command.hall[0].name }}
                                                </div>
                                            </td>
                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-900">
                                                    {{ command.hall[0].address }}
                                                </div>
                                            </td>

                                            <td :class="` ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ command.client[0].username }}
                                                </div>
                                            </td>

                                            <td :class="`${default_ClassName}`">
                                                <span
                                                    :class="` inline-flex px-2 text-xs font-semibold leading-5   ${creat_status_class}`">
                                                    <span class="ml-1">
                                                        {{ command.client[0].phoneNumber }}
                                                    </span>
                                                </span>
                                            </td>
                                            <td :class="`${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{
                                                    date_format(command.date_arrival)
                                                    }}
                                                </div>
                                            </td>
                                            <td :class="`${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{
                                                    date_format(command.date_departure)

                                                    }}
                                                </div>
                                            </td>
                                            <td :class="` ${default_ClassName}`">
                                                <div class=" text-sm leading-5 whitespace-no-wrap text-gray-500">
                                                    {{date_format(command.created_at)}}
                                                </div>
                                            </td>

                                            <td v-if="command.status == 1" @click="isAccepted(command)"
                                                :class="`cursor-pointer flex gap-3  ${default_ClassName}` ">
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                    class="w-5 h-5" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                                    y="0px" width="122.88px" height="122.88px"
                                                    viewBox="0 0 122.88 122.88"
                                                    enable-background="new 0 0 122.88 122.88" xml:space="preserve">

                                                    <path fill="#6BBE66"
                                                        d="M34.388,67.984c-0.286-0.308-0.542-0.638-0.762-0.981c-0.221-0.345-0.414-0.714-0.573-1.097 c-0.531-1.265-0.675-2.631-0.451-3.934c0.224-1.294,0.812-2.531,1.744-3.548l0.34-0.35c2.293-2.185,5.771-2.592,8.499-0.951 c0.39,0.233,0.762,0.51,1.109,0.827l0.034,0.031c1.931,1.852,5.198,4.881,7.343,6.79l1.841,1.651l22.532-23.635 c0.317-0.327,0.666-0.62,1.035-0.876c0.378-0.261,0.775-0.482,1.185-0.661c0.414-0.181,0.852-0.323,1.3-0.421 c0.447-0.099,0.903-0.155,1.356-0.165h0.026c0.451-0.005,0.893,0.027,1.341,0.103c0.437,0.074,0.876,0.193,1.333,0.369 c0.421,0.161,0.825,0.363,1.207,0.604c0.365,0.231,0.721,0.506,1.056,0.822l0.162,0.147c0.316,0.313,0.601,0.653,0.85,1.014 c0.256,0.369,0.475,0.766,0.652,1.178c0.183,0.414,0.325,0.852,0.424,1.299c0.1,0.439,0.154,0.895,0.165,1.36v0.23 c-0.004,0.399-0.042,0.804-0.114,1.204c-0.079,0.435-0.198,0.863-0.356,1.271c-0.16,0.418-0.365,0.825-0.607,1.21 c-0.238,0.377-0.518,0.739-0.832,1.07l-27.219,28.56c-0.32,0.342-0.663,0.642-1.022,0.898c-0.369,0.264-0.767,0.491-1.183,0.681 c-0.417,0.188-0.851,0.337-1.288,0.44c-0.435,0.104-0.889,0.166-1.35,0.187l-0.125,0.003c-0.423,0.009-0.84-0.016-1.241-0.078 l-0.102-0.02c-0.415-0.07-0.819-0.174-1.205-0.31c-0.421-0.15-0.833-0.343-1.226-0.575l-0.063-0.04 c-0.371-0.224-0.717-0.477-1.032-0.754l-0.063-0.06c-1.58-1.466-3.297-2.958-5.033-4.466c-3.007-2.613-7.178-6.382-9.678-9.02 L34.388,67.984L34.388,67.984z M61.44,0c16.96,0,32.328,6.883,43.453,17.987c11.104,11.125,17.986,26.493,17.986,43.453 c0,16.961-6.883,32.329-17.986,43.454C93.769,115.998,78.4,122.88,61.44,122.88c-16.961,0-32.329-6.882-43.454-17.986 C6.882,93.769,0,78.4,0,61.439C0,44.48,6.882,29.112,17.986,17.987C29.112,6.883,44.479,0,61.44,0L61.44,0z M96.899,25.981 C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685c-9.073,9.073-14.684,21.609-14.684,35.458 c0,13.851,5.611,26.387,14.684,35.46s21.609,14.685,35.46,14.685c13.85,0,26.386-5.611,35.459-14.685s14.684-21.609,14.684-35.46 C111.583,47.59,105.973,35.054,96.899,25.981L96.899,25.981z" />
                                                </svg>
                                                <p class="text-green-500">
                                                    is Accepted
                                                </p>
                                            </td>
                                            <td v-if="command.status == 0" @click="Accept(command)"
                                                :class="`cursor-pointer flex gap-3  ${default_ClassName}` ">


                                                <p class="text-red-500">
                                                    Waiting for Accept
                                                </p>
                                            </td>

                                            <td :class="`cursor-pointer ${default_ClassName}`"
                                                @click="delete(command.command_id)">
                                                <TrashIcon className="w-5 h-5 text-red-400" />
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
import emailjs from 'emailjs-com';
import moment from "moment";

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
    methods: {
        date_format(date) {
            return moment(date).format("DD/MM/YYYY");
        },
        delete(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.loading = true;
                    let params = {
                        id: id,
                        model: "commands"
                    };
                    store.dispatch('delete', params)
                    .then(() => {
                        this.loading = false;
                        this.commands = this.commands.filter(
                            command => command.command_id !== id
                        );
                    }); // end of store.dispatch


                }
            });
        },
        Accept(command) {
            Swal.fire({
                title: "Are you sure?",
                text: "Youn want to accept this command",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, accept it!"
            }).then(result => {
                if (result.value) {
                    // update the command status to accepted and update hall status to true and send mail to the user
                    this.loading = true;
                    var params = {
                        model: "commands",
                        data: {
                            id: command.id,
                            hall_id: command.hall_id,
                            status: 1,
                        }
                    };

                    this.$store.dispatch('updateSatus', params)
                    // this.sendMail(command.clinet.username, command.hall.name);
                    this.getCommands();

                }
            })
        },
        sendMail(username, hall_name) {
            // send mail to the user notifying him that the command has been accepted
            // var params = {
            //     model: "mails",
            //     data: {
            //         username: username,
            //         hall_name: hall_name,
            //     }
            // };
            // store.dispatch('sendMail', params)
            Swal.fire(
                {
                    title: "Email sent to client",
                    text: "",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, send it!"
                }
            ).then(result => {
                if (result.value) {
                    // send email to client
                    emailjs.send("gmail", "template_XqQQQQQ", {
                        to_name: username,
                        from_name: "Admin",
                        message_html: "Your command has been accepted"
                    })
                    .then(
                        function(response) {
                            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        },
                        function(error) {
                            console.log("FAILED. error=", error);
                        }
                    );
                }
            })
            
        },
        isAccepted(command) {
           // swal ask if want to no accept the command
            Swal.fire(
                {
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, no accept it!"
                }
            ).then(result => {
                if (result.value) {
                    // update the command status to accepted and update hall status to true and send mail to the user
                    this.loading = true;
                    var params = {
                        model: "commands",
                        data: {
                            id: command.id,
                            hall_id: command.hall_id,
                            status: 0,
                        }
                    };

                 this.$store.dispatch('updateSatus', params)
                    // this.sendMail(command.clinet.username, command.hall.name);
                    this.getCommands();

                }
            })
        
           
        },
        getCommands()
        { 
            store.dispatch("getCommands")
            setTimeout(() => {
                this.commands = this.$store.getters.commands;
                this.loading = false;
            }, 1000);
                
           
        }
    },

  data() {
    return {
      loading: true,
      open_modal: false,
      default_ClassName:"px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200",
      sourceImages: "../../assets/img/product/",
      th_table: [{ name: "Hall Name" },{ name: "Hall City" },{ name: "Clinet Name" },{ name: "phone Number" },{name: "date arrival",}, { name:"date departure",},{ name: " created at" }, { name: "Accpet Commands", }, { name: "Delete" },],
      commands: [],
      creat_status_class: "text-orange-500",
      images: [],
      search: "",
      searchIsLoading: false,
    };
  },
    mounted() {
        const defineParams = {model: "commands",}
        store.dispatch("getAll", defineParams);
    setTimeout(() => {
      this.commands = store.state.commands;
      this.loading = false;
    }, 1300);
  },
};
</script>
