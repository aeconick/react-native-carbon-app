import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddFinal = ({
  route
}) => {
  console.log('final category');
  console.log(route.params.selectedItem);
  return (
    <View>
      <Text>AddFinal</Text>
    </View>
  )
}

export default AddFinal

const styles = StyleSheet.create({})