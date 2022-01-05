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
      <View style={styles.View_76_6192}>
        <View style={styles.View_I76_6192_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I76_6192_17_223_11_116}
          />
        </View>
        <View style={styles.View_I76_6192_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I76_6192_17_224_11_127}
          />
          <View style={styles.View_I76_6192_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I76_6192_17_224_11_129}
            />
            <View style={styles.View_I76_6192_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I76_6192_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I76_6192_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I76_6192_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I76_6192_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I76_6192_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I76_6192_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I76_6192_17_224_11_148}
            />
            <View style={styles.View_I76_6192_17_224_11_155}>
              <View style={styles.View_I76_6192_17_224_11_156}>
                <Text style={styles.Text_I76_6192_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_76_6193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f469/5a27/e7addb593cdccf409892498d70ece014"
          }}
          style={styles.ImageBackground_I76_6193_8_613}
        />
      </View>
      <View style={styles.View_76_6194}>
        <Text style={styles.Text_76_6194}>Connect and roll!</Text>
      </View>
      <View style={styles.View_76_6195}>
        <View style={styles.View_I76_6195_70_12231} />
        <View style={styles.View_I76_6195_70_12232}>
          <View style={styles.View_I76_6195_70_12233}>
            <Text style={styles.Text_I76_6195_70_12233}>
              Define yourself with stats!
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c39/6dd4/3b77144222cc800bad82ca6c97bd574f"
          }}
          style={styles.ImageBackground_I76_6195_70_12234}
        />
        <View style={styles.View_I76_6195_70_12237}>
          <View style={styles.View_I76_6195_70_12237_45_1621} />
          <View style={styles.View_I76_6195_70_12237_45_1622}>
            <Text style={styles.Text_I76_6195_70_12237_45_1622}>Submit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_76_6270}>
        <View style={styles.View_I76_6270_38_1329}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1329_37_2228}
          />
          <View style={styles.View_I76_6270_38_1329_37_2229}>
            <Text style={styles.Text_I76_6270_38_1329_37_2229}>Charisma</Text>
          </View>
          <View style={styles.View_I76_6270_38_1329_37_2230}>
            <Text style={styles.Text_I76_6270_38_1329_37_2230}>18</Text>
          </View>
          <View style={styles.View_I76_6270_38_1329_37_2231}>
            <Text style={styles.Text_I76_6270_38_1329_37_2231}>+4</Text>
          </View>
        </View>
        <View style={styles.View_I76_6270_38_1330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1330_37_2228}
          />
          <View style={styles.View_I76_6270_38_1330_37_2229}>
            <Text style={styles.Text_I76_6270_38_1330_37_2229}>Wisdom</Text>
          </View>
          <View style={styles.View_I76_6270_38_1330_37_2230}>
            <Text style={styles.Text_I76_6270_38_1330_37_2230}>9</Text>
          </View>
          <View style={styles.View_I76_6270_38_1330_37_2231}>
            <Text style={styles.Text_I76_6270_38_1330_37_2231}>-1</Text>
          </View>
        </View>
        <View style={styles.View_I76_6270_38_1331}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1331_37_2228}
          />
          <View style={styles.View_I76_6270_38_1331_37_2229}>
            <Text style={styles.Text_I76_6270_38_1331_37_2229}>
              Intelligence
            </Text>
          </View>
          <View style={styles.View_I76_6270_38_1331_37_2230}>
            <Text style={styles.Text_I76_6270_38_1331_37_2230}>14</Text>
          </View>
          <View style={styles.View_I76_6270_38_1331_37_2231}>
            <Text style={styles.Text_I76_6270_38_1331_37_2231}>+2</Text>
          </View>
        </View>
        <View style={styles.View_I76_6270_38_1332}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1332_37_2228}
          />
          <View style={styles.View_I76_6270_38_1332_37_2229}>
            <Text style={styles.Text_I76_6270_38_1332_37_2229}>
              Constitution
            </Text>
          </View>
          <View style={styles.View_I76_6270_38_1332_37_2230}>
            <Text style={styles.Text_I76_6270_38_1332_37_2230}>13</Text>
          </View>
          <View style={styles.View_I76_6270_38_1332_37_2231}>
            <Text style={styles.Text_I76_6270_38_1332_37_2231}>+1</Text>
          </View>
        </View>
        <View style={styles.View_I76_6270_38_1333}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1333_37_2228}
          />
          <View style={styles.View_I76_6270_38_1333_37_2229}>
            <Text style={styles.Text_I76_6270_38_1333_37_2229}>Dextrexity</Text>
          </View>
          <View style={styles.View_I76_6270_38_1333_37_2230}>
            <Text style={styles.Text_I76_6270_38_1333_37_2230}>15</Text>
          </View>
          <View style={styles.View_I76_6270_38_1333_37_2231}>
            <Text style={styles.Text_I76_6270_38_1333_37_2231}>+2</Text>
          </View>
        </View>
        <View style={styles.View_I76_6270_38_1334}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
            }}
            style={styles.ImageBackground_I76_6270_38_1334_37_2228}
          />
          <View style={styles.View_I76_6270_38_1334_37_2229}>
            <Text style={styles.Text_I76_6270_38_1334_37_2229}>Strength</Text>
          </View>
          <View style={styles.View_I76_6270_38_1334_37_2230}>
            <Text style={styles.Text_I76_6270_38_1334_37_2230}>11</Text>
          </View>
          <View style={styles.View_I76_6270_38_1334_37_2231}>
            <Text style={styles.Text_I76_6270_38_1334_37_2231}>+0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_76_6192: {
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
  View_I76_6192_17_223: {
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
  ImageBackground_I76_6192_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I76_6192_17_224: {
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
  ImageBackground_I76_6192_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I76_6192_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I76_6192_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I76_6192_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I76_6192_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I76_6192_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I76_6192_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I76_6192_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I76_6192_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I76_6192_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I76_6192_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I76_6192_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I76_6192_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I76_6192_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_76_6193: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6193_8_613: {
    flexGrow: 1,
    width: wp("55%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6194: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_76_6194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_76_6195: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_6195_70_12231: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I76_6195_70_12232: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I76_6195_70_12233: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I76_6195_70_12233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I76_6195_70_12234: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I76_6195_70_12237: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_6195_70_12237_45_1621: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 4, 4, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I76_6195_70_12237_45_1622: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6195_70_12237_45_1622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_76_6270: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I76_6270_38_1329: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1329_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1329_37_2229: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1329_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1329_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1329_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1329_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1329_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I76_6270_38_1330: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1330_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1330_37_2229: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1330_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1330_37_2230: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1330_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1330_37_2231: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1330_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I76_6270_38_1331: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1331_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1331_37_2229: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1331_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1331_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1331_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1331_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1331_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I76_6270_38_1332: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1332_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1332_37_2229: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1332_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1332_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1332_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1332_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1332_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I76_6270_38_1333: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1333_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1333_37_2229: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1333_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1333_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1333_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1333_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1333_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I76_6270_38_1334: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6270_38_1334_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I76_6270_38_1334_37_2229: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1334_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I76_6270_38_1334_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1334_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I76_6270_38_1334_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I76_6270_38_1334_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
