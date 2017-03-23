/**
 * image Gallery Component
 * For mobile View show potrait view with 2 images per row.
 * For tablet View show landscape view with 4 images per row.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ListView

} from 'react-native';
import styles from './style';
export default class Gallery extends Component {

  constructor(){
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {'name':'Image1', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image2', 'image':'http://i.imgur.com/qqlSLaQ.jpg'},
        {'name':'Image3', 'image':'http://i.imgur.com/eylZ36H.jpg'},
        {'name':'Image4', 'image':'http://i.imgur.com/0SZLGQo.jpg'},
        {'name':'Image5', 'image':'http://i.imgur.com/xIzskJl.jpg'},
        {'name':'Image6', 'image':'http://i.imgur.com/qqlSLaQ.jpg'},
        {'name':'Image7', 'image':'http://i.imgur.com/eylZ36H.jpg'},
        {'name':'Image8', 'image':'http://i.imgur.com/0SZLGQo.jpg'},
      ]),
    }
  }

  renderCategory(category) {
    return (
      <View style={styles.container}>
        <Image source={{uri: category.image}}>
          <View style={styles.backdropView}>
            <Text style={styles.headline}>
              {category.name}
            </Text>
          </View>
        </Image>
      </View>
  )
}
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCategory}
      />
    );
  }
}
