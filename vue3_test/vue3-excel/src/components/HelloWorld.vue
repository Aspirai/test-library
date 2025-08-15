<template>
	<div>
		<div class="top-tool">
			<el-button @click="exportExcelOrCsv('excel')">导出Excel</el-button>
			<el-button @click="exportExcelOrCsv('csv')">导出Csv</el-button>
			<el-upload ref="uploadRef" class="import-demo" :auto-upload="false" :on-change="importCommon">
				<template #trigger>
					<el-button type="primary">导入Excel或Csv</el-button>
				</template>
			</el-upload>

			<el-upload ref="uploadRef" class="import-demo" :auto-upload="false" :on-change="importToHtml">
				<template #trigger>
					<el-button type="primary">导入生成html</el-button>
				</template>
			</el-upload>
		</div>
		<div id="excelTable"></div>

		<el-table :data="products" style="width: 100%" border>
			<el-table-column prop="id" label="ID" align="center" />
			<el-table-column prop="name" label="商品名称" />
			<el-table-column prop="category" label="分类" />
			<el-table-column prop="price" label="价格" align="right">
				<template #default="scope"> ¥{{ scope.row.price.toFixed(2) }} </template>
			</el-table-column>
			<el-table-column prop="stock" label="库存" align="center" />
			<el-table-column prop="sales" label="销量" align="center" />
			<el-table-column prop="status" label="状态" align="center">
				<template #default="scope">
					<el-tag :type="scope.row.status === '上架' ? 'success' : 'danger'">
						{{ scope.row.status }}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="180" fixed="right">
				<template #default="scope">
					<el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
					<el-button size="small" type="danger" @click="handleDelete(scope.row)"> 删除 </el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import * as XLSX from 'xlsx';
const products = ref([
	{
		id: 1,
		name: '高端智能手机',
		category: '电子产品',
		price: 5999.0,
		stock: 120,
		sales: 356,
		status: '上架',
	},
	{
		id: 2,
		name: '无线蓝牙耳机',
		category: '电子产品',
		price: 299.0,
		stock: 0,
		sales: 1024,
		status: '下架',
	},
	{
		id: 3,
		name: '全棉T恤',
		category: '服装',
		price: 89.9,
		stock: 56,
		sales: 234,
		status: '上架',
	},
	{
		id: 4,
		name: '运动跑鞋',
		category: '鞋类',
		price: 399.0,
		stock: 78,
		sales: 189,
		status: '上架',
	},
]);
console.log('this is products', products.value);
/**
 *
 * @param type 导出文件类型 excel 或这csv
 */
const exportExcelOrCsv = type => {
	const wb = XLSX.utils.book_new();
	const ws = XLSX.utils.json_to_sheet(products.value);
	XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	XLSX.writeFile(wb, `导出数据.${type === 'csv' ? 'csv' : 'xlsx'}`);
};

const uploadRef = ref(null);
// 导入excel 或者csv
const importExcel = e => {
	importCommon(e);
};

// 导入excel 或者csv的公共方法
const importCommon = (e, isHtml) => {
	console.log('importExcel', e);
	const file = e.raw;
	const reader = new FileReader();

	reader.onload = e => {
		const data = new Uint8Array(e.target.result);
		const workbook = XLSX.read(data, { type: 'array' });
		const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
		// if (isHtml) {
		// 	// 生成预览的html
		// 	const htmlTable = XLSX.utils.sheet_to_html(firstSheet);
		// 	document.getElementById('excelTable').innerHTML = htmlTable;
		// } else {
		// 生成json 数据 渲染到页面
		const jsonData = XLSX.utils.sheet_to_json(firstSheet);
		console.log('导入数据:', jsonData);
		products.value = [...jsonData, ...products.value];
		// }

		// 处理导入数据...
	};

	reader.readAsArrayBuffer(file);
};

const importToHtml = (e, isHtml) => {
	importCommon(e, isHtml);
};

const handleEdit = row => {
	console.log('编辑商品', row);
	// 实际项目中这里通常会打开编辑对话框
};

const handleDelete = row => {};
</script>

<style scoped>
.top-tool {
	margin-bottom: 20px;
}
.import-demo {
	display: inline-flex;
	margin-left: 20px;
}
</style>
