<script setup>
import { getJavaModel, getMybatisXml, getJavaMapper, getJavaService, getJavaServiceImpl } from '@/apis/coder';
import { onMounted, ref, reactive } from 'vue'
import { useCodeStore } from '@/stores/code.js'
import { useDbTypeStore } from '@/stores/dbType.js'
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

const dbTypeStore = useDbTypeStore()
const codeStore = useCodeStore()
const formRef = ref();
const activeTabName = ref('java-model')

// 切换 TAB 页
// const switchTab = (tab, event) => { }
const switchTab = () => { }

// 表单数据
const formData = ref({
  ddl: 'CREATE TABLE `article` (\n  `article_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT \'id\',\n  `article_title` varchar(512) NOT NULL COMMENT \'标题\',\n  `article_author` varchar(128) NOT NULL COMMENT \'作者\',\n  `article_content` text NOT NULL COMMENT \'内容\',\n  `create_by` bigint(20) NOT NULL COMMENT \'创建人id\',\n  `create_by_name` varchar(128) NOT NULL COMMENT \'创建人\',\n  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT \'创建时间\',\n  `update_by` bigint(20) DEFAULT NULL COMMENT \'修改人id\',\n  `update_by_name` varchar(128) DEFAULT NULL COMMENT \'修改人\',\n  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT \'修改时间\',\n  PRIMARY KEY (`article_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT=\'文章主表\';',
  // ddl: '',
  dbType: 'MySQL',
  packageName: 'com.lingyuan',
  author: 'LingYuan',
  lombok: false,
  serializable: true,
})

// 表单校验
const rules = reactive({
  ddl: [
    { required: true, message: '请输入建表语句' },
  ],
  dbType: [{ required: true, message: '数据库类型不能为空' }],
})

// 提交表单
const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate(async (valid) => {
    if (valid) {
      codeStore.setJavaModelCode(await getJavaModel(formData.value))
      codeStore.setMybatisXmlCode(await getMybatisXml(formData.value))
      codeStore.setJavaMapperCode(await getJavaMapper(formData.value))
      codeStore.setJavaServiceCode(await getJavaService(formData.value))
      codeStore.setJavaServiceImplCode(await getJavaServiceImpl(formData.value))
    }
  })
}

onMounted(async () => {
  submitForm()
})
</script>

<template>
  <el-row justify="space-between" class="el-row" :gutter="20">
    <el-col :span="6">
      <div>
        <el-form ref="formRef" :model="formData" label-width="auto" style="max-width: 600px" label-position="left"
          :rules="rules">
          <el-form-item label="包名">
            <el-input v-model="formData.packageName" clearable />
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="formData.author" clearable />
          </el-form-item>
          <el-form-item label="数据库类型" prop="dbType">
            <el-select v-model="formData.dbType">
              <el-option v-for="item in dbTypeStore.dbTypes" :key="item.value" :label="item.label"
                :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="Lombok">
            <el-switch v-model="formData.lombok" />
          </el-form-item>
          <el-form-item label="Serializable">
            <el-switch v-model="formData.serializable" />
          </el-form-item>
          <el-form-item label="建表语句" label-position="top" prop="ddl">
            <el-input v-model="formData.ddl" :rows="20" type="textarea" style="width: 100%" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">执行</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-col>

    <el-col :span="17">
      <el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="switchTab" stretch tab-position="top">
        <el-tab-pane label="Model.java" name="java-model">
          <CodeBlockComponent :code="codeStore.javaModelCode" />
        </el-tab-pane>
        <el-tab-pane label="Service.java" name="java-service">
          <CodeBlockComponent :code="codeStore.javaServiceCode" />
        </el-tab-pane>
        <el-tab-pane label="ServiceImpl.java" name="java-service-impl">
          <CodeBlockComponent :code="codeStore.javaServiceImplCode" />
        </el-tab-pane>
        <el-tab-pane label="Mapper.java" name="java-mapper">
          <CodeBlockComponent :code="codeStore.javaMapperCode" />
        </el-tab-pane>
        <el-tab-pane label="Mybatis.xml" name="mybatis-xml">
          <CodeBlockComponent :code="codeStore.mybatisXmlCode" />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
</style>