import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_19_736}>
        <View style={styles.View_I19_736_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I19_736_17_223_11_116}
          />
        </View>
        <View style={styles.View_I19_736_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I19_736_17_224_11_127}
          />
          <View style={styles.View_I19_736_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I19_736_17_224_11_129}
            />
            <View style={styles.View_I19_736_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I19_736_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I19_736_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I19_736_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I19_736_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I19_736_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I19_736_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I19_736_17_224_11_148}
            />
            <View style={styles.View_I19_736_17_224_11_155}>
              <View style={styles.View_I19_736_17_224_11_156}>
                <Text style={styles.Text_I19_736_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_774}>
        <View style={styles.View_I19_774_17_1228}>
          <View style={styles.View_I19_774_17_1228_17_1192} />
          <View style={styles.View_I19_774_17_1228_17_1193}>
            <View style={styles.View_I19_774_17_1228_17_1194}>
              <View style={styles.View_I19_774_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I19_774_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I19_774_17_1228_17_1197}>
              <View style={styles.View_I19_774_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I19_774_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I19_774_17_1228_17_1200}>
              <View style={styles.View_I19_774_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I19_774_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I19_774_17_1228_17_1203}>
            <View style={styles.View_I19_774_17_1228_17_1204}>
              <Text style={styles.Text_I19_774_17_1228_17_1204}>My Places</Text>
            </View>
          </View>
          <View style={styles.View_I19_774_17_1228_17_1206}>
            <View style={styles.View_I19_774_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I19_774_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_20_1385}>
        <View style={styles.View_I20_1385_20_955}>
          <View style={styles.View_I20_1385_20_955_19_827} />
          <View style={styles.View_I20_1385_20_955_19_828} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78a/4457/78ce96b42715765192c7092ed5d1883e"
            }}
            style={styles.ImageBackground_I20_1385_20_955_19_829}
          />
          <View style={styles.View_I20_1385_20_955_19_830}>
            <Text style={styles.Text_I20_1385_20_955_19_830}>
              Zacatrús Chamberí
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_955_19_831}>
            <Text style={styles.Text_I20_1385_20_955_19_831}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page...
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_955_19_832}>
            <View style={styles.View_I20_1385_20_955_104_9882}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d04e/926e/9f668a282bcef9ace69f5ca27a24dc1c"
                }}
                style={styles.ImageBackground_I20_1385_20_955_104_9883}
              />
            </View>
            <View style={styles.View_I20_1385_20_955_104_9765}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c934/1a1b/04777c03c6427962979f193df9dad438"
                }}
                style={styles.ImageBackground_I20_1385_20_955_104_9766}
              />
            </View>
            <View style={styles.View_I20_1385_20_955_19_835}>
              <View style={styles.View_I20_1385_20_955_19_835_11_196} />
            </View>
          </View>
          <View style={styles.View_I20_1385_20_955_19_843}>
            <Text style={styles.Text_I20_1385_20_955_19_843}>
              C. de Fernández de los Ríos, 57, 28015 Madrid
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_955_19_844}>
            <Text style={styles.Text_I20_1385_20_955_19_844}>
              owner: @Arcanesloth
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8deb/9582/3a6e83f8cadc22a726ffaf32020ac532"
            }}
            style={styles.ImageBackground_I20_1385_20_955_20_853}
          />
          <View style={styles.View_I20_1385_20_955_104_9643}>
            <View style={styles.View_I20_1385_20_955_104_9643_11_196} />
          </View>
        </View>
        <View style={styles.View_I20_1385_20_974}>
          <View style={styles.View_I20_1385_20_974_19_827} />
          <View style={styles.View_I20_1385_20_974_19_828} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e14/feea/6e6c60083c0a3cb6a5da1b406719ee43"
            }}
            style={styles.ImageBackground_I20_1385_20_974_19_829}
          />
          <View style={styles.View_I20_1385_20_974_19_830}>
            <Text style={styles.Text_I20_1385_20_974_19_830}>
              Club de Rol Inner Circle
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_974_19_831}>
            <Text style={styles.Text_I20_1385_20_974_19_831}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page...
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_974_19_832}>
            <View style={styles.View_I20_1385_20_974_104_9882}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d04e/926e/9f668a282bcef9ace69f5ca27a24dc1c"
                }}
                style={styles.ImageBackground_I20_1385_20_974_104_9883}
              />
            </View>
            <View style={styles.View_I20_1385_20_974_104_9765}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c934/1a1b/04777c03c6427962979f193df9dad438"
                }}
                style={styles.ImageBackground_I20_1385_20_974_104_9766}
              />
            </View>
            <View style={styles.View_I20_1385_20_974_19_835}>
              <View style={styles.View_I20_1385_20_974_19_835_11_196} />
            </View>
          </View>
          <View style={styles.View_I20_1385_20_974_19_843}>
            <Text style={styles.Text_I20_1385_20_974_19_843}>
              Calle de Sambara, 46, 28027 Madrid
            </Text>
          </View>
          <View style={styles.View_I20_1385_20_974_19_844}>
            <Text style={styles.Text_I20_1385_20_974_19_844}>
              owner: @Arcanesloth
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8deb/9582/3a6e83f8cadc22a726ffaf32020ac532"
            }}
            style={styles.ImageBackground_I20_1385_20_974_20_853}
          />
          <View style={styles.View_I20_1385_20_974_104_9643}>
            <View style={styles.View_I20_1385_20_974_104_9643_11_196} />
          </View>
        </View>
      </View>
      <View style={styles.View_21_1529}>
        <View style={styles.View_I21_1529_18_966}>
          <View style={styles.View_I21_1529_18_966_17_1101} />
          <View style={styles.View_I21_1529_18_966_17_1102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58a/b4e9/6e527ed4062c6a879686b0f3837c9dfb"
              }}
              style={styles.ImageBackground_I21_1529_18_966_17_1103}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3d5/8a06/27dc6ffcb3e6e2138235fdc1e29fc5f3"
        }}
        style={styles.ImageBackground_105_6435}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_19_736: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I19_736_17_223: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I19_736_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_736_17_224: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I19_736_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_736_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I19_736_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_736_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I19_736_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_736_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_736_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_736_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I19_736_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I19_736_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I19_736_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I19_736_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I19_736_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_736_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_774: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_774_17_1228: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_774_17_1228_17_1192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I19_774_17_1228_17_1193: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I19_774_17_1228_17_1194: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_774_17_1228_17_1195: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_774_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_774_17_1228_17_1197: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_I19_774_17_1228_17_1198: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_774_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_774_17_1228_17_1200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_I19_774_17_1228_17_1201: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_774_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_774_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_774_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_774_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I19_774_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I19_774_17_1228_17_1207: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_774_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_20_1385: {
    width: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden"
  },
  View_I20_1385_20_955: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_955_19_827: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I20_1385_20_955_19_828: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I20_1385_20_955_19_829: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I20_1385_20_955_19_830: {
    flexGrow: 1,
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I20_1385_20_955_19_830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I20_1385_20_955_19_831: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I20_1385_20_955_19_831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I20_1385_20_955_19_832: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%")
  },
  View_I20_1385_20_955_104_9882: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I20_1385_20_955_104_9883: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I20_1385_20_955_104_9765: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I20_1385_20_955_104_9766: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I20_1385_20_955_19_835: {
    width: wp("92%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_955_19_835_11_196: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099
  },
  View_I20_1385_20_955_19_843: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_I20_1385_20_955_19_843: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I20_1385_20_955_19_844: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_I20_1385_20_955_19_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "uppercase"
  },
  ImageBackground_I20_1385_20_955_20_853: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("35%")
  },
  View_I20_1385_20_955_104_9643: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_955_104_9643_11_196: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099
  },
  View_I20_1385_20_974: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_974_19_827: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I20_1385_20_974_19_828: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I20_1385_20_974_19_829: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I20_1385_20_974_19_830: {
    flexGrow: 1,
    width: wp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I20_1385_20_974_19_830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I20_1385_20_974_19_831: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I20_1385_20_974_19_831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I20_1385_20_974_19_832: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%")
  },
  View_I20_1385_20_974_104_9882: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I20_1385_20_974_104_9883: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I20_1385_20_974_104_9765: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I20_1385_20_974_104_9766: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I20_1385_20_974_19_835: {
    width: wp("92%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_974_19_835_11_196: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099
  },
  View_I20_1385_20_974_19_843: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_I20_1385_20_974_19_843: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I20_1385_20_974_19_844: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_I20_1385_20_974_19_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "uppercase"
  },
  ImageBackground_I20_1385_20_974_20_853: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("35%")
  },
  View_I20_1385_20_974_104_9643: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I20_1385_20_974_104_9643_11_196: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099
  },
  View_21_1529: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("95%"),
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden"
  },
  View_I21_1529_18_966: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_1529_18_966_17_1101: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(222, 43, 43, 1)"
  },
  View_I21_1529_18_966_17_1102: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I21_1529_18_966_17_1103: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_6435: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("111%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
