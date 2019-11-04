<template>
  <div class="Second">
    <div class="pig">
      <img src="../assets/pig.jpg" alt />
    </div>
    <div class="Second-2-bg">
     
    <div class="Second-2">
      <div class="Second-2-a" ><p>留言板</p></div>
       <div class="Second-2-b">发表您的留言</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="numm">
          <el-input v-model.number="ruleForm.numm"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交留言</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Second {
  .Second-2-bg {
      background: #f7f7f7;
 
  .Second-2 {
    width: 800px;
    margin: 0 auto;
    background: white;
    .Second-2-a {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #999999;
     
      p {
           color: #0099FF;
           width: 80px;
           text-align: center;
           border-bottom: 3px solid #0099FF;
      }
    }
     }
  }
}
</style>
<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      ruleForm: {
        name: "",
        numm: "",
        email: "",
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        numm: [{ validator: checkPhone, trigger: "blur" }],
        desc: [{ required: true, message: "请填写内容", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
