<script setup>
import apirator from '@/lib/apirator.js';
import { onMounted, ref, defineEmits } from 'vue';


const props = defineProps([ 'pid' ])
const emits = defineEmits(['updateSku'])

const selectedOptions = ref({})

const skuList  = ref({
  "145015": {
    "ID": "145015",
    "PROPERTY_ATT_GAUGE_VALUE": "60",
    "PROPERTY_ATT_GAUGE_ENUM_ID": "683",
    
    "PROPERTY_SURFACE_TYPE_VALUE": {
      "ID": "13",
      "UF_NAME": "Гладкий",
      "UF_SORT": "200",
      "UF_XML_ID": "att_texture_type_glad_lits",
      "UF_LINK": "",
      "UF_DESCRIPTION": "",
      "UF_FULL_DESCRIPTION": "",
      "UF_DEF": "0",
      "UF_FILE": "141622",
      "PICTURE_FILE": "https:\/\/belbeton.ru\/upload\/uf\/de1\/de1da00c8cb0902332f6fa7c91dbe04c.jpg"
    },

    "PROPERTY_ATT_SERIES_VALUE": "Стандарт",
    "PROPERTY_ATT_SERIES_ENUM_ID": "643",
    "PROPERTY_ATT_COLOR_DESIGHN_VALUE": "Стандарт",
    "PROPERTY_ATT_COLOR_DESIGHN_ENUM_ID": "809",

    "PROPERTY_ATT_COLOR_VALUE": {
      "ID": "22",
      "UF_NAME": "Коричневый",
      "UF_SORT": "300",
      "UF_XML_ID": "brown2",
      "UF_LINK": "",
      "UF_DESCRIPTION": "",
      "UF_FULL_DESCRIPTION": "",
      "UF_DEF": "0",
      "UF_FILE": "236713",
      "PICTURE_FILE": "https:\/\/belbeton.ru\/upload\/uf\/910\/59ambd3ndu1eb192y1iuzqbry3sf2r8y.jpg"
    },

    "CNT": "1",

    "PRICE_DATA": {
      "ID": "3341",
      "PRODUCT_ID": "145015",
      "EXTRA_ID": null,
      "CATALOG_GROUP_ID": "3",
      "PRICE": "667.00",
      "CURRENCY": "RUB",
      "TIMESTAMP_X": "28.12.2018 11:34:36",
      "QUANTITY_FROM": null,
      "QUANTITY_TO": null,
      "TMP_ID": null,
      "PRODUCT_QUANTITY": "100",
      "PRODUCT_QUANTITY_TRACE": "N",
      "PRODUCT_CAN_BUY_ZERO": "N",
      "PRODUCT_NEGATIVE_AMOUNT_TRACE": "N",
      "PRODUCT_WEIGHT": "19710",
      "ELEMENT_IBLOCK_ID": "65",
      "BASE": "Y",
      "CATALOG_GROUP_NAME": "PRICE"
    }
  },
})

const matrix = ref({
})

const skuProps = ref({
  "PROPERTY_ATT_GAUGE"    : "Толщина",
  "PROPERTY_SURFACE_TYPE" : "Тип поверхности",
  "PROPERTY_ATT_SERIES"   : "Серия",
})


const currentOffer = ref({})


function isComplex (item) {
  const firstValue = Object.values(item)[0];
  return typeof firstValue == 'object'
}


function complexIsActive (key, dict) {
  if (!selectedOptions['value'][key]) { return false }
  return selectedOptions['value'][key]['UF_NAME'] == dict['UF_NAME']
}


function updateCurrentOffer (filters = selectedOptions.value) {
  let allOffers = Object.values(skuList.value)

  let res = allOffers.find( offer => {
    return Object.entries(filters).every(([key, filterValue]) => {
      let offerValue = offer[`${key}_VALUE`];

      if (typeof(filterValue) == 'object') {
        return offerValue['UF_NAME'] == filterValue['UF_NAME'];
      }

      return offerValue == filterValue;
    });
  })

  return res
}


function updateFilter (key, value) {
  if (selectedOptions.value[key] == value) {
    delete selectedOptions.value[key]
  } else {
    selectedOptions.value[key] = value;
  }

  currentOffer.value = updateCurrentOffer()
  emits('updateSku', currentOffer.value)
}


function checkButton (key, value) {
  let testFilter = {
    ... selectedOptions.value,
    [key]: value
  }

  return updateCurrentOffer(testFilter)
}



onMounted( async () => {
  let pid = props.pid
  
  let filterData = await apirator.getFilter(pid).then(res => res.json())
  console.log('GET filter');
  

  skuList.value  = filterData['OFFERS']
  skuProps.value = filterData['PROPS']
  matrix.value   = filterData['MATRIX']


  console.log({matrix: matrix.value});

  currentOffer.value = updateCurrentOffer()
})
</script>


<template>
<div class="iFilter">
  <div class="iFilter--optHolder" v-for="item, key in matrix">
    <p class="iFilter--optName">{{ skuProps[key] }}</p>

    <ul class="iFilter--optList" v-if="isComplex(item)">
      <button class="iFilter--optIcon" v-for="dict in item" @click="updateFilter(key, dict)"
        :class="{'active': complexIsActive(key, dict)}"
        :disabled="!checkButton(key, dict)"
      >
        <img class="iFilter--optImg" :src="dict['PICTURE_FILE']" alt="" />
        <p class="iFilter--optText">{{ dict['UF_NAME'] }}</p>
      </button>
    </ul>


    <ul class="iFilter--optList" v-else>
      <button class="iFilter--optValue" v-for="value in item" @click="updateFilter(key, value)"
        :class="{'active': selectedOptions[key] == value}"
        :disabled="!checkButton(key, value)"
      >
        {{ value }}
      </button>
    </ul>
  </div>
</div>
</template>


<style scoped>
.iFilter {
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  gap: 50px;
}

.iFilter--optHolder {
  /* background: hsl(190 10% 95%); */
  background: #ecf0f1;
  /* border-radius: 10px; */
}

.iFilter--optName {
  position: relative;
  /* border-radius: 10px 10px 0px 0px; */
  width: 99%;

  font-size: 1.2rem;
  letter-spacing: 1px;

  background: linear-gradient(
    to right,
    rgba(189, 195, 199, .4),
    rgba(236, 240, 241, 0)
  );


  padding: 10px;
  margin: 0;
}


.iFilter--optList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  gap: 16px;

  list-style: none;
  font-weight: 300;
  padding: 20px;
}

.iFilter--optValue {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 10px 20px;
  background: rgba(0, 0, 0, .05);
  border-radius: 4px;
  border: none;
  outline: none;

  font-size: .9rem;
  letter-spacing: 1px;
  font-weight: 400;

  border: 1px solid rgba(0, 0, 0, .2);

  
  transition: .3s;
  cursor: pointer;
}

.iFilter--optValue:disabled {
  opacity: .8;
  cursor: not-allowed;
}



.iFilter--optValue:hover {
  background: rgba(0, 0, 0, .4);
  /* color: hsl(190 10% 100%); */
  color: white;
}

.iFilter--optIcon {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: none;
  outline: none;

  gap: 10px;
  padding: 10px;
  border-radius: 10px;

  width: 120px;
  font-weight: 400;
}

.iFilter--optIcon:hover {
  background: rgba(0, 0, 0, .1);
  cursor: pointer;
}

.iFilter--optIcon:disabled {
  opacity: .3;
  cursor: not-allowed;
}

.iFilter--optIcon:disabled img {
  height: 10px;
}

.iFilter--optImg {
  height: 70px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.iFilter--optText {
  text-align: center;
  letter-spacing: 1px;
  margin: 0; padding: 0;
}


.active {
  background: hsl(200 100 30);
  color: white;
}

</style>