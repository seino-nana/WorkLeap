<script setup>
	import { ref } from 'vue'
	const TEXT = ref('')
</script>
<template>
	<view class="chat">
		<view class="">123</view>
	</view>
	<view class="input-box">
				<view style="flex: 1;margin-right: 10rpx;">
					<u--textarea height="40rpx" v-model="TEXT" placeholder="提出你的问题" prefixIcon="search" autoHeight
	maxlength="400"
						prefixIconStyle="font-size: 22px;color: #909399"></u--textarea>
				</view>
				<view>
					<button iconColor="#ffffff" color="#7197b1" size="normal" text="发送"
						>
					</button>
				</view>
			</view>
</template>

<style lang="scss">
	// .input-box {
	// 	display: flex;
	// 	background: #fff;
	// 	position: fixed;
	// 	bottom: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	padding: 20rpx;
	// 	box-sizing: border-box;
	// 	justify-content: space-between;
	// 	align-items: center;
	// }

</style>
