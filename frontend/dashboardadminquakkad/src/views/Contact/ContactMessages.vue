<template>
    <div>
        <Main>
            <BreadCrumb :items="['Dashboard', 'Halls']" />
            <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
                <h1 class="text-3xl py-4 border-b mb-10">halls List</h1>
                <div v-if="loading">
                    <Loading />
                </div>
                <div v-else class="mb-4 flex justify-between items-center">
                    <div class="flex-1 pr-4">
                        <div class="relative md:w-1/3">
                            <input type="search" v-model="search" @keypress="searchKeyPress"
                                class=" w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="Search..." />
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
                        <div class=" py-2 -my-2  overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
                            <div class=" inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg ">
                                <table class="min-w-full">
                                    <thead>
                                        <tr>
                                            <th v-for="(header, index) in th_table" :key="index"
                                                class="  px-6 py-3 text-xs font-medium leading-4 tracking-wider  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 ">
                                                {{ header.name }}
                                            </th>
                                        </tr>
                                    <tbody v-if="messages.length == 0 && !searchIsLoading"
                                        class="text-center p-5 w-1/2">
                                        <div class="text-gray-600">
                                            No data
                                            <div class="text-gray-600">
                                                <Loading />
                                            </div>
                                        </div>
                                    </tbody>
                                    </thead>
                                    <tbody class="bg-white">
                                        <tr v-for="message in messages" :key="message.id">
                                            <td :class="`cursor-pointer ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-900">
                                                    {{ message.id }}
                                                </div>
                                            </td>
                                            <td :class="` ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ message.object }}$
                                                </div>
                                            </td>
                                               <td :class="` ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ message.message }}
                                                </div>
                                            </td>
                                               <td :class="` ${default_ClassName}`">
                                                <div class="text-sm leading-5 text-gray-500">
                                                    {{ message.phone }}
                                                </div>
                                            </td>

                                            <td @click="sendMail(message.email)"
                                                :class="`cursor-pointer ${default_ClassName}`">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-envelope text-purple-700"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                            </td>
                                            <td @click="deleteSub(message.id)"
                                                :class="`cursor-pointer ${default_ClassName} text-red-400`">
                                                <TrashIcon />
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
    import TrashIcon from "@/components/icons/TrashIcon.vue";
    import Loading from "@/components/base/Loading.vue";
    import BreadCrumb from "@/components/base/BreadCrummb.vue";
    import Swal from "sweetalert2";

    export default {
        name: "createProduct",
        components: { Main, TrashIcon, Loading, BreadCrumb },
        data() {
            return {
                halls: [],
                loading: true,
                open_modal: false,
                default_ClassName: " px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200",
                sourceImages: "../../assets/img/product/",
                th_table: [
                    { name: "id" },
                    { name: "Obejct" },
                    { name: "Email" },
                    { name: "Phone" },
                    { name: "Send Mail" },
                    { name: "Delete" },
                ],
                messages: [],
                creat_status_class: "",
                images: [],
                search: "",
                searchIsLoading: false,
                items: [],
            };
        },
        methods: {
            deleteSub(id) {
                console.log(id);

                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.value) {
                        let isDelete = false;
                        let params = {
                            id: id,
                            model: "messages",
                        };
                        this.$store.dispatch("delete", params);
                        this.messages = this.messages.filter((hall) => hall.id !== id);
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire("Cancelled", "Your hall is safe :)", "error");
                    }
                });
            },
            get_halls() {
                this.messages = this.$store.state.messages;
            },
            searchKeyPress() {
                console.log(this.search);
                if (this.search.length > 0) {
                    this.messages = this.messages.filter((hall) => {
                        return hall.email.toLowerCase().includes(this.search.toLowerCase());
                    });
                } else {
                    this.get_halls();
                }
                if (this.search.length > 0 && event.keyCode == 8) {
                    this.messages = this.messages.filter((hall) => {
                        return hall.email.toLowerCase().includes(this.search.toLowerCase());
                    });
                }
            },
            sendMail(email) {
                console.log(email);
                let params = {
                    email: email,
                    subject: "Newsletter",
                    message: "Hello, this is a newsletter",
                };
                this.$store.dispatch("sendMail", params);
                Swal.fire("Sent!", "Your mail has been sent.", "success");
            },
        },
        mounted() {
            const params = { model: "messages" };
            store.dispatch("getAll", params);
            setTimeout(() => {
                this.messages = store.getters.messages;
                this.loading = false;
            }, 1300);
        },
    };
</script>