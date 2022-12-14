<template>
    <Container role="AGENT">
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
            </div>
            <!-- Pinned ISS -->
            <div class="px-4 mt-6 sm:px-6 lg:px-8">
                <ul
                    role="list"
                    class="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
                >
                    <li
                        v-for="ISSUE in 2"
                        :key="ISSUE"
                        class="relative flex col-span-1 rounded-md shadow-sm"
                    >
                        <div
                            :class="[
                                'flex-shrink-0 bg-green-400 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
                            ]"
                        ></div>
                        <div
                            class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
                        >
                            <div class="flex-1 px-4 py-2 text-sm truncate">
                                <a
                                    href="#"
                                    class="font-medium text-gray-900 hover:text-gray-600"
                                >
                                    ACTIVE REPS
                                </a>
                                <p class="text-gray-500">2 Members</p>
                            </div>
                            <Menu as="div" class="flex-shrink-0 pr-2">
                                <MenuButton
                                    class="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    <span class="sr-only">Open options</span>
                                    <DotsVerticalIcon
                                        class="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                                <transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <MenuItems
                                        class="absolute z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-10 top-3 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div class="py-1">
                                            <MenuItem v-slot="{ active }">
                                                <a
                                                    href="#"
                                                    :class="[
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                    ]"
                                                    >View</a
                                                >
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </li>
                </ul>
            </div>
            <ProgressSpinner
                v-if="loading"
                style="width: 20px; height: 20px"
                strokeWidth="8"
                animationDuration=".5s"
            />

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
                    <li
                        v-for="ISSUE in issues.filter(
                            (iss) =>
                                iss.issue_status !== 'CLOSED' &&
                                iss.issue_status !== 'PENDING'
                        )"
                        :key="ISSUE.pk"
                    >
                        <a
                            @click="JOIN_ROOM(ISSUE.pk, ISSUE)"
                            href="#"
                            class="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
                        >
                            <span class="flex items-center space-x-3 truncate">
                                <span
                                    class="text-sm font-medium leading-6 truncate"
                                >
                                    {{ ISSUE.subject }}
                                </span>
                            </span>
                            <ChevronRightIcon
                                class="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                </ul>
                <div v-if="issues.length == 0" class="text-center">
                    <span>No issues found</span>
                </div>
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
                                    Description
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
                                v-for="(ISSUE, index) in issues.filter(
                                    (iss) =>
                                        iss.issue_status !== 'CLOSED' &&
                                        iss.issue_status !== 'PENDING'
                                )"
                                :key="ISSUE.pk"
                                class="cursor-pointer"
                                :class="
                                    index !== 0
                                        ? 'bg-gray-100'
                                        : 'border-l-[12px] border-green-500 hover:bg-green-100'
                                "
                            >
                                <td
                                    key=""
                                    class="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap"
                                >
                                    <div
                                        class="flex items-center space-x-3 lg:pl-2"
                                    >
                                        <a
                                            href="#"
                                            class="truncate hover:text-gray-600"
                                        >
                                            <span>
                                                {{ ISSUE.subject }}
                                            </span>
                                        </a>
                                    </div>
                                </td>
                                <td
                                    class="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap"
                                >
                                    <div
                                        class="flex items-center space-x-3 lg:pl-2"
                                    >
                                        <a
                                            href="#"
                                            class="truncate hover:text-gray-600"
                                        >
                                            <span>
                                                {{ ISSUE.description }}
                                            </span>
                                        </a>
                                    </div>
                                </td>

                                <td
                                    class="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap"
                                >
                                    {{ ISSUE.created_at }}
                                </td>
                                <td
                                    class="px-6 py-3 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <a
                                        v-if="index == 0"
                                        @click="JOIN_ROOM(ISSUE.pk, ISSUE)"
                                        class="text-indigo-600 hover:text-indigo-900"
                                        >Go to Chat</a
                                    >
                                </td>
                                <!--  <td
                                    class="px-6 py-3 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <Modal v-if="index == 0" title="Add Member">
                                        <form action="" class="w-[430px] mb-4">
                                            <select
                                                name=""
                                                id=""
                                                class="w-full border-gray-300 rounded"
                                            >
                                                <option value="">John</option>
                                                <option value="">John1</option>
                                                <option value="">John2</option>
                                                <option value="">John3</option>
                                            </select>
                                        </form>
                                    </Modal>
                                </td>
                                <td
                                    class="px-6 py-3 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <Modal
                                        v-if="index == 0"
                                        title="Invite a Member"
                                    >
                                        <form action="" class="w-[430px] mb-4">
                                            <select
                                                name=""
                                                id=""
                                                class="w-full border-gray-300 rounded"
                                            >
                                                <option value="">John</option>
                                                <option value="">John1</option>
                                                <option value="">John2</option>
                                                <option value="">John3</option>
                                            </select>
                                        </form>
                                    </Modal>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="issues.length == 0" class="text-center">
                        <span>No issues found</span>
                    </div>
                </div>
            </div>
        </main>
    </Container>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
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
    { name: 'Archived', href: '#', icon: ViewListIcon, current: false },
    { name: 'Unresolved', href: '#', icon: ViewListIcon, current: false },
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
const pinnedProjects = ISS.filter((ISSUE) => ISSUE.pinned)
import IssuesService from '../services/Issues'
import { url } from '../../config.js'
const socket = io('ws://' + url)

export default {
    name: 'HomePage',
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronRightIcon,
        DotsVerticalIcon,
    },
    setup() {
        const sidebarOpen = ref(false)
        const router = useRouter()
        const store = useStore()
        const issues = ref([])

        const loading = ref(false)
        const admin = computed(() => {
            if (store.getters['auth/user'].role === 'AGENT') {
                return true
            } else {
                return false
            }
        })

        onMounted(() => {
            console.log(admin.value)
            if (admin.value == false) {
                router.push('/CustomerDashboard')
            }
            FETCH_ISSUES(store.getters['auth/user'].pk)
            socket.on('connect', () => {
                console.log(socket.connected)
            })

            socket.on('disconnect', () => {
                socket.connect()
                console.log('connected false')
            })

            socket.on('add-issue-response', (response) => {
                //TODO: CHECK RESPONSE STATUS
                loading.value = true
                issues.value = [response.data, ...issues.value]
                loading.value = false
            })

            socket.on('change-issue-status-response', (response) => {
                //TODO: CHECK RESPONSE STATUS
                console.log('issue status changed')
            })

            socket.on('join-room-response', (response) => {
                //TODO: CHECK RESPONSE STATUS
                console.log(response.data.user_id)
                if (response.data.user_id === store.state.auth.user.pk) {
                    router.push(`/Chat/${receive_id.value}`)
                }
            })

            socket.on('leave-room-response', (response) => {
                //TODO: CHECK RESPONSE STATUS
                console.log('leave room chat')
                console.log(response.data)
            })

            socket.on('receive-message', (response) => {
                console.log(response.data)
            })
        })

        onUnmounted(() => {
            socket.close()
        })

        function NavigateToChat(id) {
            router.push('Chat')
        }
        async function FETCH_ISSUES(id) {
            try {
                loading.value = true
                const response = await IssuesService.getAll()
                console.log(response.data.data)
                issues.value = response.data.data.reverse()
                loading.value = false
            } catch (error) {
                loading.value = false
                console.log(error)
            }
        }

        async function CHANGE_ISSUE_STATUS(id, status) {
            try {
                const data = {
                    issue_id: id,
                    issue_status: status,
                }
                loading.value = true
                const response = socket.emit(
                    'change-issue-status',
                    data,
                    (data) => {
                        console.log(data)
                    }
                )
            } catch (error) {
                loading.value = false
                console.log(error)
            }
        }
        const receive_id = ref('')
        async function JOIN_ROOM(id, issue) {
            receive_id.value = id
            await store.dispatch('issue/Save_Issue', issue)
            try {
                await CHANGE_ISSUE_STATUS(id, 'PROGRESS')
                const data = {
                    issue_id: id,
                    user_id: store.state.auth.user.pk,
                    first_name: store.state.auth.user.first_name,
                    last_name: store.state.auth.user.last_name,
                }
                loading.value = true
                socket.emit('join-room', data, (data) => {
                    console.log(data)
                })
            } catch (error) {
                loading.value = false
                console.log(error)
            }
        }

        return {
            navigation,
            issues,
            loading,
            ISS,
            JOIN_ROOM,
            ACTIVE_REPS,
            pinnedProjects,
            sidebarOpen,
            NavigateToChat,
        }
    },
}
</script>
