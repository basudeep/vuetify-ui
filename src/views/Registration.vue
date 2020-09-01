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
                <v-toolbar-title class="mx-auto">Registration</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form 
                ref='form'
                :lazy-validation="lazy"
                v-model="valid"
                >
                <v-text-field
                label="Name"
                prepend-inner-icon="mdi-account"
                outlined
                v-model='data.name'
                :rules="nameRules"
                >
                </v-text-field>
                  <v-text-field
                    label="Email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    outlined
                    required
                    v-model="data.email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    :rules="passRules"
                    id="password"
                    label="Password"
                    name="password"
                    hint="At least 6 characters"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    type="password"
                    v-model="data.password"
                    counter 
                    class="input-group--focused"
                  ></v-text-field>

                  <v-text-field
                    :rules="confirmRules"
                    label="Confirm Password"
                    name="Confirm"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    type="password"
                    v-model="data.confirmPassword"
                    counter 
                    class="input-group--focused"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block dark color="pink accent-3"  @click="validate" >Register</v-btn>
              
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
          name:'',
          email:'',
          password:'',
          confirmPassword:''
        },
        valid:true,
        showPass: false,
        lazy:false,
        rules: {
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length >= 3) || 'Name must 3 characters',
        ],
        passRules:[
            v => !!v || 'Password is required',
            v => (v && v.length >= 6 ) || 'Password must 6 characters',
        ],
        confirmRules:[
            v => !!v || 'Confirmation is required',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
  }),

  methods:{
    validate () {
        this.$refs.form.validate()
      },
  }
}
</script>