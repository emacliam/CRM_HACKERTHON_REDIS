<template>
    <Container ROLE="'CUSTOMER'">
        <main class="flex-1">
            <!-- Page title & actions -->
            <div
                class="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            >
                <h1
                    class="text-lg font-bold leading-6 text-gray-900 sm:truncate"
                >
                    Dashboard
                </h1>

                <div class="flex mt-4 sm:mt-0 sm:ml-4">
                    <Modal title="Create Issue">
                        <form action="" class="w-[430px] mb-4">
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="subject"
                                        name="subject"
                                        v-model="issue.subject"
                                        type="text"
                                        autocomplete="subject"
                                        required=""
                                        class="block w-full px-3 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="description"
                                        name="description"
                                        v-model="issue.description"
                                        type="text"
                                        autocomplete="description"
                                        required=""
                                        class="block w-full px-3 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-light focus:border-primary-light sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div
                                class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
                            >
                                <button
                                    type="button"
                                    class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    @click="POST_ISSUE()"
                                >
                                    Create Issue
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>

            <!-- Pinned ISS -->
            <div class="px-4 mt-6 sm:px-6 lg:px-8">
                <span>Your Issues</span>
            </div>

            <!-- Projects list (only on smallest breakpoint) -->
            <div class="mt-10 sm:hidden">
                <div class="px-4 sm:px-6">
                    <h2
                        class="text-xs font-medium tracking-wide text-gray-500 uppercase"
                    >
                        Queries
                    </h2>
                </div>
                <ul
                    role="list"
                    class="mt-3 border-t border-gray-200 divide-y divide-gray-100"
                >
                    <li v-for="project in ISS" :key="project.id">
                        <a
                            href="#"
                            class="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
                        >
                            <span class="flex items-center space-x-3 truncate">
                                <span
                                    :class="[
                                        project.bgColorClass,
                                        'w-2.5 h-2.5 flex-shrink-0 rounded-full',
                                    ]"
                                    aria-hidden="true"
                                />
                                <span
                                    class="text-sm font-medium leading-6 truncate"
                                >
                                    {{ project.title }}
                                    {{ ' ' }}
                                    <span
                                        class="font-normal text-gray-500 truncate"
                                        >in {{ project.team }}</span
                                    >
                                </span>
                            </span>
                            <ChevronRightIcon
                                class="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Projects table (small breakpoint and up) -->
            <div class="hidden mt-8 sm:block">
                <div
                    class="inline-block min-w-full align-middle border-b border-gray-200"
                >
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-t border-gray-200">
                                <th
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    <span class="lg:pl-2">Queries</span>
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Active
                                </th>
                                <th
                                    class="hidden px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50"
                                >
                                    created At
                                </th>
                                <th
                                    class="py-3 pr-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                />
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-100">
                            <tr
                                v-for="project in ISS"
                                :key="project.id"
                                class="cursor-pointer hover:bg-gray-100"
                            >
                                <td
                                    class="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap"
                                >
                                    <div
                                        class="flex items-center space-x-3 lg:pl-2"
                                    >
                                        <div
                                            :class="[
                                                project.bgColorClass,
                                                'flex-shrink-0 w-2.5 h-2.5 rounded-full',
                                            ]"
                                            aria-hidden="true"
                                        />
                                        <a
                                            href="#"
                                            class="truncate hover:text-gray-600"
                                        >
                                            <span>
                                                {{ project.title }}
                                                {{ ' ' }}
                                                <span
                                                    class="font-normal text-gray-500"
                                                    >in {{ project.team }}</span
                                                >
                                            </span>
                                        </a>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-3 text-sm font-medium text-gray-500"
                                >
                                    <div class="flex items-center space-x-2">
                                        <div
                                            class="flex flex-shrink-0 -space-x-1"
                                        >
                                            <img
                                                v-for="member in project.members"
                                                :key="member.handle"
                                                class="w-6 h-6 rounded-full max-w-none ring-2 ring-white"
                                                :src="member.imageUrl"
                                                :alt="member.name"
                                            />
                                        </div>
                                        <span
                                            v-if="
                                                project.totalMembers >
                                                project.members.length
                                            "
                                            class="flex-shrink-0 text-xs font-medium leading-5"
                                            >+{{
                                                project.totalMembers -
                                                project.members.length
                                            }}</span
                                        >
                                    </div>
                                </td>
                                <td
                                    class="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap"
                                >
                                    {{ project.lastUpdated }}
                                </td>
                                <td
                                    class="px-6 py-3 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <a
                                        href="/Chat"
                                        class="text-indigo-600 hover:text-indigo-900"
                                        >Go to Chat</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </Container>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    ClockIcon,
    HomeIcon,
    MenuAlt1Icon,
    ViewListIcon,
    XIcon,
} from '@heroicons/vue/outline'
import {
    ChevronRightIcon,
    DotsVerticalIcon,
    SearchIcon,
    SelectorIcon,
} from '@heroicons/vue/solid'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Chats', href: '#', icon: ViewListIcon, current: false },
]
const issues = [
    { name: 'Unresolved Issues', href: '#', bgColorClass: 'bg-red-500' },
    { name: 'Pending', href: '#', bgColorClass: 'bg-green-500' },
]
const ISS = [
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },

    // More ISS...
]

const ACTIVE_REPS = [
    {
        id: 1,
        title: 'LOGIN NOT WORKING',
        initials: 'GA',
        team: 'Engineering',
        members: [
            {
                name: 'Dries Vincent',
                handle: 'driesvincent',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                handle: 'lindsaywalton',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
        totalMembers: 2,
        lastUpdated: 'March 17, 2020',
        pinned: true,
        bgColorClass: 'bg-green-600',
    },
]
const pinnedProjects = ISS.filter((project) => project.pinned)
import IssuesService from '../services/Issues'
import { io } from 'socket.io-client'

export default {
    name: 'UserHome',
    components: {
        ChevronRightIcon,
    },

    data() {
        return {
            socket: {},
            issue: {
                subject: '',
                description: '',
                sender: this.$store.state.auth.user.pk,
            },
            issues_data: null,
        }
    },

    async created() {
        this.socket = io('redis-crm-api.herokuapp.com', {
            transports: ['websocket'],
            secure: true,
            reconnection: true,
            rejectUnauthorized: false,
        })
    },

    async mounted() {
        this.socket.on('connect_error', (error) => {
            console.log(error)
        })

        this.socket.on('connect', (data) => {
            console.log('socket connected successfully')
            console.log(data)
        })

        this.socket.on('disconnect', (error) => {
            console.log('socket disconnected')
            console.log(error)
        })
    },
    methods: {
        async POST_ISSUE() {
            try {
                const data = {
                    ...this.issue,
                }
                console.log(data)
                const response = await this.socket.emit('add-issue', data)
                console.log(response)
            } catch (error) {}
        },
    },
    /*   mounted(){
this.sockets.subscribe('add-issue-response', (data) => {
    this.issues_data = data
});
    },
    beforeUnmount(){
this.sockets.unsubscribe('add-issue-response');
    }, */
    setup() {
        const sidebarOpen = ref(false)
        const router = useRouter()
        const store = useStore()

        const admin = computed(() => {
            if (store.getters['auth/user'].role === 'CUSTOMER') {
                return true
            } else {
                return false
            }
        })
        onMounted(() => {
            if (admin.value == false) {
                router.push('/Dashboard')
            }
            FETCH_ISSUES(store.getters['auth/user'].pk)
        })

        function NavigateToChat(id) {
            router.push('Chat')
        }

        async function FETCH_ISSUES(id) {
            try {
                const response = await IssuesService.getbyCustomer(id)
                console.log(response)
            } catch (c) {}
        }

        return {
            navigation,
            issues,
            ISS,
            ACTIVE_REPS,
            pinnedProjects,
            sidebarOpen,
            NavigateToChat,
        }
    },
}
</script>
