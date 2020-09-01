<template>
    <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
            lg="5"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="pink accent-3"
                dark
                flat
              >
                <v-toolbar-title class="mx-auto">Accout Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form 
                ref='form'
                :lazy-validation="lazy"
                v-model="valid"
                >
                  <v-text-field
                    label="Login"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    outlined
                    required
                    v-model="data.email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passRules"
                    :type="showPass ? 'text' : 'password'"
                    id="password"
                    label="Password"
                    name="password"
                    hint="At least 6 characters"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    v-model="data.password"
                    counter 
                    class="input-group--focused"
                    @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block dark color="pink accent-3"  @click="handleLogin"  >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data: () => ({

        data:{
          email:'',
          password:''
        },
        valid:true,
        showPass: false,
        lazy:false,
        rules: {
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        passRules:[
            v => !!v || 'Password is required',
            v => (v && v.length >= 6 ) || 'Password must 6 characters',
          ],
           emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
  }),

  methods:{
    handleLogin () {
        let isValid = this.$refs.form.validate()
        if(isValid){
          this.$router.push('/dashboard')
        }
      },
  }
}
</script>