<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
        >
            <div class="logo" >
                <div>fisnone</div>
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
                <right-user-info class="user-info"></right-user-info>

            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import rightUserInfo from './RightUserInfo'
    export default {
        name: "container",
        data(){
            return {
                collapsed: false,
            }
        },
        components: { rightUserInfo }
    }
</script>
<style lang="stylus" >
    #components-layout-demo-custom-trigger  {
        .trigger {
            font-size 18px
            line-height 64px
            padding 0 24px
            cursor pointer
            transition color .3s
            :hover {
                color #1890ff

            }
        }
        .logo {
            height 32px
            color white
            font 24px
            background #001529
            margin 16px
            div {
                text-align center
                font-size 24px
                color #1d2a74
            }
        }
        .user-info {
            float right
            padding 0 24px
        }
    }

</style>