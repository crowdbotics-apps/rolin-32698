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
      <View style={styles.View_19_607}>
        <View style={styles.View_I19_607_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I19_607_17_223_11_116}
          />
        </View>
        <View style={styles.View_I19_607_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I19_607_17_224_11_127}
          />
          <View style={styles.View_I19_607_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I19_607_17_224_11_129}
            />
            <View style={styles.View_I19_607_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I19_607_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I19_607_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I19_607_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I19_607_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I19_607_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I19_607_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I19_607_17_224_11_148}
            />
            <View style={styles.View_I19_607_17_224_11_155}>
              <View style={styles.View_I19_607_17_224_11_156}>
                <Text style={styles.Text_I19_607_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_645}>
        <View style={styles.View_I19_645_17_1228}>
          <View style={styles.View_I19_645_17_1228_17_1192} />
          <View style={styles.View_I19_645_17_1228_17_1193}>
            <View style={styles.View_I19_645_17_1228_17_1194}>
              <View style={styles.View_I19_645_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I19_645_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I19_645_17_1228_17_1197}>
              <View style={styles.View_I19_645_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I19_645_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I19_645_17_1228_17_1200}>
              <View style={styles.View_I19_645_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I19_645_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I19_645_17_1228_17_1203}>
            <View style={styles.View_I19_645_17_1228_17_1204}>
              <Text style={styles.Text_I19_645_17_1228_17_1204}>
                Search Table{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_I19_645_17_1228_17_1206}>
            <View style={styles.View_I19_645_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I19_645_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_19_687}>
        <View style={styles.View_I19_687_18_737}>
          <View style={styles.View_I19_687_18_737_17_1145} />
          <View style={styles.View_I19_687_18_737_17_1146} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbe/8170/060f5671a12c253e7643ba809686a1e4"
            }}
            style={styles.ImageBackground_I19_687_18_737_17_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbe/8170/060f5671a12c253e7643ba809686a1e4"
            }}
            style={styles.ImageBackground_I19_687_18_737_104_10067}
          />
          <View style={styles.View_I19_687_18_737_17_1148}>
            <Text style={styles.Text_I19_687_18_737_17_1148}>
              The Lady of the Lake
            </Text>
          </View>
          <View style={styles.View_I19_687_18_737_17_1149}>
            <Text style={styles.Text_I19_687_18_737_17_1149}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page...
            </Text>
          </View>
          <View style={styles.View_I19_687_18_737_17_1150}>
            <View style={styles.View_I19_687_18_737_41_1938}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d04e/926e/9f668a282bcef9ace69f5ca27a24dc1c"
                }}
                style={styles.ImageBackground_I19_687_18_737_41_1939}
              />
            </View>
            <View style={styles.View_I19_687_18_737_41_1491}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c934/1a1b/04777c03c6427962979f193df9dad438"
                }}
                style={styles.ImageBackground_I19_687_18_737_41_1492}
              />
            </View>
          </View>
          <View style={styles.View_I19_687_18_737_17_1153}>
            <View style={styles.View_I19_687_18_737_17_1153_11_196} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21f0/1e66/0b4412c78ef3f838811e164a82c5e898"
            }}
            style={styles.ImageBackground_I19_687_18_737_41_2299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10bd/c351/29aee583ff245391321879395e2dd17b"
            }}
            style={styles.ImageBackground_I19_687_18_737_18_729}
          />
          <View style={styles.View_I19_687_18_737_18_736}>
            <Text style={styles.Text_I19_687_18_737_18_736}>4/4 Players</Text>
          </View>
          <View style={styles.View_I19_687_18_737_18_852}>
            <Text style={styles.Text_I19_687_18_737_18_852}>
              Master @Arcanesloth
            </Text>
          </View>
          <View style={styles.View_I19_687_18_737_41_1989}>
            <Text style={styles.Text_I19_687_18_737_41_1989}>playing</Text>
          </View>
          <View style={styles.View_I19_687_18_737_41_2134}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4049/4987/9bbd1b08a8b0da1bfebda228b8855955"
              }}
              style={styles.ImageBackground_I19_687_18_737_41_2134_38_1399}
            />
            <View style={styles.View_I19_687_18_737_41_2134_38_1400}>
              <Text style={styles.Text_I19_687_18_737_41_2134_38_1400}>
                DnD 5e
              </Text>
            </View>
          </View>
          <View style={styles.View_I19_687_18_737_41_2649}>
            <Text style={styles.Text_I19_687_18_737_41_2649}>Online</Text>
          </View>
          <View style={styles.View_I19_687_18_737_42_2911}>
            <View style={styles.View_I19_687_18_737_42_2911_11_196} />
          </View>
          <View style={styles.View_I19_687_18_737_52_2555}>
            <Text style={styles.Text_I19_687_18_737_52_2555}>Language</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c57/3644/974513100efe89ced9d5333fb8947be8"
            }}
            style={styles.ImageBackground_I19_687_18_737_52_2754}
          />
          <View style={styles.View_I19_687_18_737_52_3026}>
            <Text style={styles.Text_I19_687_18_737_52_3026}>Next session</Text>
          </View>
          <View style={styles.View_I19_687_18_737_52_3285}>
            <Text style={styles.Text_I19_687_18_737_52_3285}>
              19/05/2022 18:00 GMT+1
            </Text>
          </View>
        </View>
        <View style={styles.View_I19_687_18_783}>
          <View style={styles.View_I19_687_18_783_17_1145} />
          <View style={styles.View_I19_687_18_783_17_1146} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a9b/3591/21ae7ff01d9b3b200cf38a288b838657"
            }}
            style={styles.ImageBackground_I19_687_18_783_17_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a9b/3591/21ae7ff01d9b3b200cf38a288b838657"
            }}
            style={styles.ImageBackground_I19_687_18_783_104_10067}
          />
          <View style={styles.View_I19_687_18_783_17_1148}>
            <Text style={styles.Text_I19_687_18_783_17_1148}>
              The False King
            </Text>
          </View>
          <View style={styles.View_I19_687_18_783_17_1149}>
            <Text style={styles.Text_I19_687_18_783_17_1149}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page...
            </Text>
          </View>
          <View style={styles.View_I19_687_18_783_17_1150}>
            <View style={styles.View_I19_687_18_783_41_1938}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d04e/926e/9f668a282bcef9ace69f5ca27a24dc1c"
                }}
                style={styles.ImageBackground_I19_687_18_783_41_1939}
              />
            </View>
            <View style={styles.View_I19_687_18_783_41_1491}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c934/1a1b/04777c03c6427962979f193df9dad438"
                }}
                style={styles.ImageBackground_I19_687_18_783_41_1492}
              />
            </View>
          </View>
          <View style={styles.View_I19_687_18_783_17_1153}>
            <View style={styles.View_I19_687_18_783_17_1153_11_196} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21f0/1e66/0b4412c78ef3f838811e164a82c5e898"
            }}
            style={styles.ImageBackground_I19_687_18_783_41_2299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10bd/c351/29aee583ff245391321879395e2dd17b"
            }}
            style={styles.ImageBackground_I19_687_18_783_18_729}
          />
          <View style={styles.View_I19_687_18_783_18_736}>
            <Text style={styles.Text_I19_687_18_783_18_736}>3 Players</Text>
          </View>
          <View style={styles.View_I19_687_18_783_18_852}>
            <Text style={styles.Text_I19_687_18_783_18_852}>
              Master @Arcanesloth
            </Text>
          </View>
          <View style={styles.View_I19_687_18_783_41_1989}>
            <Text style={styles.Text_I19_687_18_783_41_1989}>playing</Text>
          </View>
          <View style={styles.View_I19_687_18_783_41_2134}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4049/4987/9bbd1b08a8b0da1bfebda228b8855955"
              }}
              style={styles.ImageBackground_I19_687_18_783_41_2134_38_1399}
            />
            <View style={styles.View_I19_687_18_783_41_2134_38_1400}>
              <Text style={styles.Text_I19_687_18_783_41_2134_38_1400}>
                DnD 5e
              </Text>
            </View>
          </View>
          <View style={styles.View_I19_687_18_783_41_2649}>
            <Text style={styles.Text_I19_687_18_783_41_2649}>Online</Text>
          </View>
          <View style={styles.View_I19_687_18_783_42_2911}>
            <View style={styles.View_I19_687_18_783_42_2911_11_196} />
          </View>
          <View style={styles.View_I19_687_18_783_52_2555}>
            <Text style={styles.Text_I19_687_18_783_52_2555}>Language</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c57/3644/974513100efe89ced9d5333fb8947be8"
            }}
            style={styles.ImageBackground_I19_687_18_783_52_2754}
          />
          <View style={styles.View_I19_687_18_783_52_3026}>
            <Text style={styles.Text_I19_687_18_783_52_3026}>Next session</Text>
          </View>
          <View style={styles.View_I19_687_18_783_52_3285}>
            <Text style={styles.Text_I19_687_18_783_52_3285}>
              19/05/2022 18:00 GMT+1
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_19_607: {
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
  View_I19_607_17_223: {
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
  ImageBackground_I19_607_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_607_17_224: {
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
  ImageBackground_I19_607_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_607_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I19_607_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_607_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I19_607_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_607_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_607_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_607_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I19_607_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I19_607_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I19_607_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I19_607_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I19_607_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_607_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_645: {
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
  View_I19_645_17_1228: {
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
  View_I19_645_17_1228_17_1192: {
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
  View_I19_645_17_1228_17_1193: {
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
  View_I19_645_17_1228_17_1194: {
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
  View_I19_645_17_1228_17_1195: {
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
  ImageBackground_I19_645_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_645_17_1228_17_1197: {
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
  View_I19_645_17_1228_17_1198: {
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
  ImageBackground_I19_645_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_645_17_1228_17_1200: {
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
  View_I19_645_17_1228_17_1201: {
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
  ImageBackground_I19_645_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I19_645_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_645_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_645_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I19_645_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I19_645_17_1228_17_1207: {
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
  ImageBackground_I19_645_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_19_687: {
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
  View_I19_687_18_737: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_737_17_1145: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I19_687_18_737_17_1146: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I19_687_18_737_17_1147: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_687_18_737_104_10067: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_687_18_737_17_1148: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_737_17_1148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_687_18_737_17_1149: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_737_17_1149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_687_18_737_17_1150: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("54%")
  },
  View_I19_687_18_737_41_1938: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I19_687_18_737_41_1939: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I19_687_18_737_41_1491: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I19_687_18_737_41_1492: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I19_687_18_737_17_1153: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_737_17_1153_11_196: {
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
  ImageBackground_I19_687_18_737_41_2299: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("42%")
  },
  ImageBackground_I19_687_18_737_18_729: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("35%")
  },
  View_I19_687_18_737_18_736: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_18_736: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_737_18_852: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_18_852: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_737_41_1989: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_41_1989: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_737_41_2134: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I19_687_18_737_41_2134_38_1399: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_687_18_737_41_2134_38_1400: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_737_41_2134_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.021000000834465026,
    textTransform: "none"
  },
  View_I19_687_18_737_41_2649: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_41_2649: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_737_42_2911: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_737_42_2911_11_196: {
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
  View_I19_687_18_737_52_2555: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_52_2555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  ImageBackground_I19_687_18_737_52_2754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("48%")
  },
  View_I19_687_18_737_52_3026: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("47%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_52_3026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_737_52_3285: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_I19_687_18_737_52_3285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "uppercase"
  },
  View_I19_687_18_783: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_783_17_1145: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I19_687_18_783_17_1146: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I19_687_18_783_17_1147: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I19_687_18_783_104_10067: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_687_18_783_17_1148: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_783_17_1148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_687_18_783_17_1149: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_783_17_1149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_687_18_783_17_1150: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("54%")
  },
  View_I19_687_18_783_41_1938: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I19_687_18_783_41_1939: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I19_687_18_783_41_1491: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I19_687_18_783_41_1492: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I19_687_18_783_17_1153: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_783_17_1153_11_196: {
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
  ImageBackground_I19_687_18_783_41_2299: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("42%")
  },
  ImageBackground_I19_687_18_783_18_729: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("35%")
  },
  View_I19_687_18_783_18_736: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_18_736: {
    color: "rgba(255, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_783_18_852: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_18_852: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_783_41_1989: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_41_1989: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_783_41_2134: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I19_687_18_783_41_2134_38_1399: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I19_687_18_783_41_2134_38_1400: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_687_18_783_41_2134_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.021000000834465026,
    textTransform: "none"
  },
  View_I19_687_18_783_41_2649: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_41_2649: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_783_42_2911: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_687_18_783_42_2911_11_196: {
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
  View_I19_687_18_783_52_2555: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_52_2555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  ImageBackground_I19_687_18_783_52_2754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("48%")
  },
  View_I19_687_18_783_52_3026: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("47%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_52_3026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "uppercase"
  },
  View_I19_687_18_783_52_3285: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_I19_687_18_783_52_3285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
