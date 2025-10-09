(function(){
'use strict';
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.codePointAt__I__I(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.repeat__I__T(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1));
  } else {
    return r;
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.cast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
  return obj;
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArray = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.getArrayOf().constr)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_LHabitTracker__main__AT__V(args) {
  var this$1 = $m_LHabitTracker$();
  $f_s_App__main__AT__V(this$1, args);
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  jl_FloatingPointBits$: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  jl_System$Streams$: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  jl_Utils$Cache$: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
function $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, componentType, offset, dimensions$1) {
  var length = $n(dimensions$1).get(offset);
  var result = $n(componentType).data.newArray(length);
  var innerOffset = ((1 + offset) | 0);
  if ((innerOffset < $n(dimensions$1).u.length)) {
    var result2 = $asArrayOf_O(result, 1);
    var this$1 = $n(componentType);
    var innerComponentType = this$1.data.getComponentType();
    var i = 0;
    while ((i !== length)) {
      $n(result2).set(i, $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, innerComponentType, innerOffset, dimensions$1));
      i = ((1 + i) | 0);
    }
  }
  return result;
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__AI__O = (function(componentType, dimensions) {
  var len = $n(dimensions).u.length;
  if ((len === 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  var outermostComponentType = componentType;
  var i = 1;
  while ((i !== len)) {
    var componentType$1 = outermostComponentType;
    var this$1 = $n(componentType$1).data.newArray(0);
    outermostComponentType = $objectGetClass(this$1);
    i = ((1 + i) | 0);
  }
  return $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O(this, outermostComponentType, 0, dimensions);
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var t = $as_T(x);
      var this$3 = $n(t);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(t);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $x_1.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var t$1 = $as_T(x$1);
      var this$8 = $n(t$1);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(t$1);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$x_3.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46;
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
  }
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
        } else {
          var isTokenAnAssertion = false;
        }
        break;
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true;
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      } else {
        break;
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true;
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125);
    }
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    var this$3 = $n(arg2);
    if ((((this$3.length % 2) | 0) === 0)) {
      return arg1;
    } else {
      var groupNumber = $uI(parseInt(arg3, 10));
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2) + ((1 + groupNumber) | 0)) : arg1);
    }
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break;
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true;
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60);
      }
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0);
  } else {
    var d1 = (-1);
  }
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
  } else {
    var d2 = (-1);
  }
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
    } else {
      var d3 = (-1);
    }
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, value);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16));
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?";
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd));
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
    }
  }
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94);
  } else {
    var isNegated = false;
  }
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break;
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break;
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true;
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63);
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true;
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62);
  }
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = ({});
}
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
  }
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
  }
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    }
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break;
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ju_regex_PatternCompiler: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
}
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint));
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ju_regex_PatternCompiler$: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
}
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ju_regex_PatternCompiler$CharacterClassBuilder: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
  }
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
}
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
}
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)));
}
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth));
}
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  ju_regex_PatternCompiler$CompiledCharClass: 1
}));
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this);
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1);
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0));
    }
  }
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1;
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo;
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo));
  }
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)));
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"));
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)));
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth));
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  sc_Iterator$ConcatIteratorCell: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  scm_MutationTracker$: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $n(x3).c;
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $n(x3).c;
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $n(xc).c;
    var this$2 = $n(x2).c;
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $n(xc).c;
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $n(xc).c;
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
$c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if (($n(xs).u.length === 0)) {
    var this$1 = $m_sci_ArraySeq$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length));
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
/** @constructor */
function $c_Lscalatags_Escaping$() {
  this.Lscalatags_Escaping$__f_tagRegex = null;
  $n_Lscalatags_Escaping$ = this;
  this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "^[a-z][:\\w0-9-]*$", $m_sci_Nil$());
}
$c_Lscalatags_Escaping$.prototype = new $h_O();
$c_Lscalatags_Escaping$.prototype.constructor = $c_Lscalatags_Escaping$;
/** @constructor */
function $h_Lscalatags_Escaping$() {
}
$h_Lscalatags_Escaping$.prototype = $c_Lscalatags_Escaping$.prototype;
$c_Lscalatags_Escaping$.prototype.validTag__T__Z = (function(s) {
  var this$1 = $n($n(this.Lscalatags_Escaping$__f_tagRegex).unapplySeq__jl_CharSequence__s_Option(s));
  return (!this$1.isEmpty__Z());
});
$c_Lscalatags_Escaping$.prototype.validAttrName__T__Z = (function(s) {
  var this$1 = $n(s);
  var len = this$1.length;
  if ((len === 0)) {
    return false;
  }
  var this$2 = $n(s);
  var sc = $charAt(this$2, 0);
  var startCharValid = ((((sc >= 97) && (sc <= 122)) || ((sc >= 65) && (sc <= 90))) || (sc === 58));
  if ((!startCharValid)) {
    return false;
  }
  var pos = 1;
  while ((pos < len)) {
    var this$3 = $n(s);
    var index = pos;
    var c = $charAt(this$3, index);
    var valid = ((((((((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))) || ((c >= 48) && (c <= 57))) || (c === 45)) || (c === 58)) || (c === 46)) || (c === 95));
    if ((!valid)) {
      return false;
    }
    pos = ((1 + pos) | 0);
  }
  return true;
});
var $d_Lscalatags_Escaping$ = new $TypeData().initClass($c_Lscalatags_Escaping$, "scalatags.Escaping$", ({
  Lscalatags_Escaping$: 1
}));
var $n_Lscalatags_Escaping$;
function $m_Lscalatags_Escaping$() {
  if ((!$n_Lscalatags_Escaping$)) {
    $n_Lscalatags_Escaping$ = new $c_Lscalatags_Escaping$();
  }
  return $n_Lscalatags_Escaping$;
}
function $is_Lscalatags_generic_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Modifier)));
}
function $as_Lscalatags_generic_Modifier(obj) {
  return (($is_Lscalatags_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Modifier"));
}
function $isArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Modifier)));
}
function $asArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Modifier;", depth));
}
var $d_Lscalatags_generic_Modifier = new $TypeData().initClass(1, "scalatags.generic.Modifier", ({
  Lscalatags_generic_Modifier: 1
}));
/** @constructor */
function $c_Lscalatags_generic_Namespace$() {
  this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = null;
  $n_Lscalatags_generic_Namespace$ = this;
  this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$1();
}
$c_Lscalatags_generic_Namespace$.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$.prototype.constructor = $c_Lscalatags_generic_Namespace$;
/** @constructor */
function $h_Lscalatags_generic_Namespace$() {
}
$h_Lscalatags_generic_Namespace$.prototype = $c_Lscalatags_generic_Namespace$.prototype;
var $d_Lscalatags_generic_Namespace$ = new $TypeData().initClass($c_Lscalatags_generic_Namespace$, "scalatags.generic.Namespace$", ({
  Lscalatags_generic_Namespace$: 1
}));
var $n_Lscalatags_generic_Namespace$;
function $m_Lscalatags_generic_Namespace$() {
  if ((!$n_Lscalatags_generic_Namespace$)) {
    $n_Lscalatags_generic_Namespace$ = new $c_Lscalatags_generic_Namespace$();
  }
  return $n_Lscalatags_generic_Namespace$;
}
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var reference = (false ? this.sjs_js_JavaScriptException__f_exception : this);
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this)))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)));
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth));
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.ju_regex_Matcher__f_position = 0;
  $thiz.ju_regex_Matcher__f_lastMatch = null;
  return $thiz;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.ju_regex_Matcher__f_lastMatch;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  this.ju_regex_Matcher__f_regionStart0 = 0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.matches__Z = (function() {
  $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
  this.ju_regex_Matcher__f_lastMatch = $n(this.ju_regex_Matcher__f_pattern0).execMatches__T__O(this.ju_regex_Matcher__f_inputstr);
  return (this.ju_regex_Matcher__f_lastMatch !== null);
});
$c_ju_regex_Matcher.prototype.group__I__T = (function(group) {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[$n(this.ju_regex_Matcher__f_pattern0).numberedGroup__I__I(group)];
  return $as_T(((x !== (void 0)) ? x : null));
});
var $d_ju_regex_Matcher = new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  ju_regex_Matcher: 1,
  ju_regex_MatchResult: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_groupCount = 0;
  this.ju_regex_Pattern__f_groupNumberMap = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f_jsRegExpForMatches = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_groupCount = groupCount;
  this.ju_regex_Pattern__f_groupNumberMap = groupNumberMap;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  this.ju_regex_Pattern__f_jsRegExpForMatches = new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.execMatches__T__O = (function(input) {
  return this.ju_regex_Pattern__f_jsRegExpForMatches.exec(input);
});
$c_ju_regex_Pattern.prototype.numberedGroup__I__I = (function(group) {
  if (((group < 0) || (group > this.ju_regex_Pattern__f_groupCount))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + group));
  }
  return $uI(this.ju_regex_Pattern__f_groupNumberMap[group]);
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern;
});
var $d_ju_regex_Pattern = new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ju_regex_Pattern: 1,
  Ljava_io_Serializable: 1
}));
function $f_s_App__main__AT__V($thiz, args) {
  var this$1 = $n($thiz.LHabitTracker$__f_scala$App$$initCode);
  var it = this$1.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var x0 = $n(it).next__O();
    var proc$2 = $as_F0(x0);
    var this$2 = $n(proc$2);
    this$2.apply__O();
  }
}
function $f_s_App__$init$__V($thiz) {
  var this$2 = $m_RTLong$();
  var value = $uD(new Date().getTime());
  this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  $thiz.LHabitTracker$__f_scala$App$$initCode = new $c_scm_ListBuffer();
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false;
  }
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_Option$() {
}
$c_s_Option$.prototype = new $h_O();
$c_s_Option$.prototype.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $c_s_Option$.prototype;
$c_s_Option$.prototype.apply__O__s_Option = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().initClass($c_s_Option$, "scala.Option$", ({
  s_Option$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  return $thiz;
}
function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz;
}
/** @constructor */
function $c_s_util_matching_Regex() {
  this.s_util_matching_Regex__f_pattern = null;
}
$c_s_util_matching_Regex.prototype = new $h_O();
$c_s_util_matching_Regex.prototype.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
}
$h_s_util_matching_Regex.prototype = $c_s_util_matching_Regex.prototype;
$c_s_util_matching_Regex.prototype.unapplySeq__jl_CharSequence__s_Option = (function(s) {
  var this$1 = $n(this.s_util_matching_Regex__f_pattern);
  var m = new $c_ju_regex_Matcher(this$1, $dp_toString__T($n(s)));
  if (m.matches__Z()) {
    var n = $n(m.ju_regex_Matcher__f_pattern0).ju_regex_Pattern__f_groupCount;
    var b = new $c_scm_ListBuffer();
    var i = 0;
    while ((i < n)) {
      var x0 = i;
      var elem = m.group__I__T(((1 + x0) | 0));
      b.addOne__O__scm_ListBuffer(elem);
      i = ((1 + i) | 0);
    }
    return new $c_s_Some(b.toList__sci_List());
  } else {
    return $m_s_None$();
  }
});
$c_s_util_matching_Regex.prototype.toString__T = (function() {
  return $n(this.s_util_matching_Regex__f_pattern).ju_regex_Pattern__f__pattern;
});
var $d_s_util_matching_Regex = new $TypeData().initClass($c_s_util_matching_Regex, "scala.util.matching.Regex", ({
  s_util_matching_Regex: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lscalatags_JsDom$GenericStyle() {
}
$c_Lscalatags_JsDom$GenericStyle.prototype = new $h_O();
$c_Lscalatags_JsDom$GenericStyle.prototype.constructor = $c_Lscalatags_JsDom$GenericStyle;
/** @constructor */
function $h_Lscalatags_JsDom$GenericStyle() {
}
$h_Lscalatags_JsDom$GenericStyle.prototype = $c_Lscalatags_JsDom$GenericStyle.prototype;
$c_Lscalatags_JsDom$GenericStyle.prototype.apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Style__O__V = (function(t, s, v) {
  var \u03b42$ = t.style;
  \u03b42$.setProperty($n(s).Lscalatags_generic_Style__f_cssName, $dp_toString__T($n(v)));
});
var $d_Lscalatags_JsDom$GenericStyle = new $TypeData().initClass($c_Lscalatags_JsDom$GenericStyle, "scalatags.JsDom$GenericStyle", ({
  Lscalatags_JsDom$GenericStyle: 1,
  Lscalatags_generic_StyleValue: 1
}));
/** @constructor */
function $c_Lscalatags_LowPriorityImplicits$$anon$2(ev$3) {
  this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2 = null;
  this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2 = ev$3;
}
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype = new $h_O();
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.constructor = $c_Lscalatags_LowPriorityImplicits$$anon$2;
/** @constructor */
function $h_Lscalatags_LowPriorityImplicits$$anon$2() {
}
$h_Lscalatags_LowPriorityImplicits$$anon$2.prototype = $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype;
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Attr__O__V = (function(t, a, v) {
  t[$n(a).Lscalatags_generic_Attr__f_name] = $n(this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2).apply__O__O(v);
});
var $d_Lscalatags_LowPriorityImplicits$$anon$2 = new $TypeData().initClass($c_Lscalatags_LowPriorityImplicits$$anon$2, "scalatags.LowPriorityImplicits$$anon$2", ({
  Lscalatags_LowPriorityImplicits$$anon$2: 1,
  Lscalatags_generic_AttrValue: 1
}));
function $f_Lscalatags_generic_Aggregate__$init$__V($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_stringStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_booleanStyle = new $c_Lscalatags_JsDom$GenericStyle();
}
/** @constructor */
function $c_Lscalatags_generic_Namespace$$anon$1() {
}
$c_Lscalatags_generic_Namespace$$anon$1.prototype = new $h_O();
$c_Lscalatags_generic_Namespace$$anon$1.prototype.constructor = $c_Lscalatags_generic_Namespace$$anon$1;
/** @constructor */
function $h_Lscalatags_generic_Namespace$$anon$1() {
}
$h_Lscalatags_generic_Namespace$$anon$1.prototype = $c_Lscalatags_generic_Namespace$$anon$1.prototype;
$c_Lscalatags_generic_Namespace$$anon$1.prototype.uri__T = (function() {
  return "http://www.w3.org/1999/xhtml";
});
var $d_Lscalatags_generic_Namespace$$anon$1 = new $TypeData().initClass($c_Lscalatags_generic_Namespace$$anon$1, "scalatags.generic.Namespace$$anon$1", ({
  Lscalatags_generic_Namespace$$anon$1: 1,
  Lscalatags_generic_Namespace: 1
}));
function $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, s, ns, raw) {
  var namespace = $m_s_Option$().apply__O__s_Option(ns);
  return new $c_Lscalatags_generic_Attr(s, namespace, raw);
}
/** @constructor */
function $c_LHabitTracker$() {
  this.LHabitTracker$__f_scala$App$$initCode = null;
  this.LHabitTracker$__f_appPlaceHolder = null;
  this.LHabitTracker$__f_d = null;
  $n_LHabitTracker$ = this;
  $f_s_App__$init$__V(this);
  this.LHabitTracker$__f_appPlaceHolder = document.getElementById("app");
  var $x_20 = $as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().div__Lscalatags_generic_TypedTag());
  var $x_19 = $m_sr_ScalaRunTime$();
  $m_Lscalatags_JsDom$all$();
  var $x_18 = new $c_Lscalatags_JsDom$StringFrag("Scala Taga");
  var $x_17 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().br__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([])));
  var $x_16 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().br__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([])));
  var $x_15 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().button__Lscalatags_generic_TypedTag()));
  var $x_14 = $m_sr_ScalaRunTime$();
  var $x_13 = $n($m_Lscalatags_JsDom$all$().backgroundColor__Lscalatags_generic_Style()).$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("blue", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringStyle);
  $m_Lscalatags_JsDom$all$();
  var $x_12 = new $c_Lscalatags_JsDom$StringFrag("Simple button");
  var $x_11 = $m_Lscalatags_JsDom$all$().onclick__Lscalatags_generic_Attr();
  var $x_10 = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    var this$5 = $m_s_Console$();
    var this$6 = $n(this$5.out__Ljava_io_PrintStream());
    this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Blue button\n");
  }));
  $m_Lscalatags_JsDom$all$();
  var ev = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((f) => {
    var f$1 = $as_F0(f);
    return $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(f$1);
  }));
  var $x_9 = $x_15.apply__sci_Seq__Lscalatags_JsDom$TypedTag($x_14.wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$x_13, $x_12, $n($x_11).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($x_10, new $c_Lscalatags_LowPriorityImplicits$$anon$2(ev))])));
  var $x_8 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().br__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([])));
  var $x_7 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().br__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([])));
  var $x_6 = $as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().button__Lscalatags_generic_TypedTag());
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $n($m_Lscalatags_JsDom$all$().backgroundColor__Lscalatags_generic_Style()).$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair("green", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringStyle);
  $m_Lscalatags_JsDom$all$();
  var $x_3 = new $c_Lscalatags_JsDom$StringFrag("Simple button");
  var $x_2 = $m_Lscalatags_JsDom$all$().onclick__Lscalatags_generic_Attr();
  var $x_1 = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    var this$10 = $m_s_Console$();
    var this$11 = $n(this$10.out__Ljava_io_PrintStream());
    this$11.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Green button\n");
  }));
  $m_Lscalatags_JsDom$all$();
  var ev$1 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((f$2) => {
    var f$3 = $as_F0(f$2);
    return $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(f$3);
  }));
  this.LHabitTracker$__f_d = $n($x_20).apply__sci_Seq__Lscalatags_JsDom$TypedTag($x_19.wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$x_18, $x_17, $x_16, $x_9, $x_8, $x_7, $n($x_6).apply__sci_Seq__Lscalatags_JsDom$TypedTag($x_5.wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$x_4, $x_3, $n($x_2).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($x_1, new $c_Lscalatags_LowPriorityImplicits$$anon$2(ev$1))])))])));
  this.LHabitTracker$__f_appPlaceHolder.appendChild($n(this.LHabitTracker$__f_d).render__Lorg_scalajs_dom_Element());
}
$c_LHabitTracker$.prototype = new $h_O();
$c_LHabitTracker$.prototype.constructor = $c_LHabitTracker$;
/** @constructor */
function $h_LHabitTracker$() {
}
$h_LHabitTracker$.prototype = $c_LHabitTracker$.prototype;
var $d_LHabitTracker$ = new $TypeData().initClass($c_LHabitTracker$, "HabitTracker$", ({
  LHabitTracker$: 1,
  s_DelayedInit: 1,
  s_App: 1
}));
var $n_LHabitTracker$;
function $m_LHabitTracker$() {
  if ((!$n_LHabitTracker$)) {
    $n_LHabitTracker$ = new $c_LHabitTracker$();
  }
  return $n_LHabitTracker$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.data = $data;
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.data.isInterface ? "interface " : (this.data.isPrimitive ? "" : "class ")) + this.data.name);
});
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        if ((i === otherSize)) {
          return 1;
        }
        $n(it).next__O();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = null;
  this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f = f;
}
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype;
$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype.apply__O = (function() {
  return $n(this.sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855__f_f)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().initClass($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = null;
  this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f = f;
}
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype;
$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype.apply__O__O = (function(x0) {
  return $n(this.sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28__f_f)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().initClass($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction0__F0__sjs_js_Function0 = (function(f) {
  return (() => $n(f).apply__O());
});
var $d_sjs_js_Any$ = new $TypeData().initClass($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  sjs_js_Any$: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
function $f_Lscalatags_JsDom$Aggregate__$init$__V($thiz) {
}
function $f_Lscalatags_generic_MouseEventAttrs__$init$__V($thiz) {
  $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "ondrag", null, false);
}
function $f_Lscalatags_generic_TypedTag__build__O__V($thiz, b) {
  var current = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  var dimensions = new $ac_I(new Int32Array([$n($thiz.Lscalatags_JsDom$TypedTag__f_modifiers).length__I()]));
  var arr = $asArrayOf_sci_Seq($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_sci_Seq.getClassOf(), dimensions), 1);
  var i = 0;
  while (true) {
    var x = current;
    var x$2 = $m_sci_Nil$();
    if ((!((x !== null) && $n(x).equals__O__Z(x$2)))) {
      $n(arr).set(i, $as_sci_Seq($n(current).head__O()));
      current = $as_sci_List($n(current).tail__O());
      i = ((1 + i) | 0);
    } else {
      break;
    }
  }
  var j = $n(arr).u.length;
  while ((j > 0)) {
    j = (((-1) + j) | 0);
    var frag = $n(arr).get(j);
    var i$2 = 0;
    while ((i$2 < $n(frag).length__I())) {
      $n($as_Lscalatags_generic_Modifier($n(frag).apply__I__O(i$2))).applyTo__O__V(b);
      i$2 = ((1 + i$2) | 0);
    }
  }
}
function $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V($thiz, b) {
  b.appendChild($thiz.render__Lorg_scalajs_dom_Node());
}
function $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, s, void$1, ns) {
  if ((!$m_Lscalatags_Escaping$().validTag__T__Z(s))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal tag name: " + s) + " is not a valid XML tag name"));
  }
  var modifiers = $m_sci_Nil$();
  return new $c_Lscalatags_JsDom$TypedTag(s, modifiers, void$1, ns);
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2;
    } else {
      var cause = null;
    }
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $n($as_jl_Character(that)).c;
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
/** @constructor */
function $c_Lscalatags_generic_Attr(name, namespace, raw) {
  this.Lscalatags_generic_Attr__f_name = null;
  this.Lscalatags_generic_Attr__f_namespace = null;
  this.Lscalatags_generic_Attr__f_raw = false;
  this.Lscalatags_generic_Attr__f_name = name;
  this.Lscalatags_generic_Attr__f_namespace = namespace;
  this.Lscalatags_generic_Attr__f_raw = raw;
  if (((!raw) && (!$m_Lscalatags_Escaping$().validAttrName__T__Z(name)))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal attribute name: " + name) + " is not a valid XML attribute name"));
  }
}
$c_Lscalatags_generic_Attr.prototype = new $h_O();
$c_Lscalatags_generic_Attr.prototype.constructor = $c_Lscalatags_generic_Attr;
/** @constructor */
function $h_Lscalatags_generic_Attr() {
}
$h_Lscalatags_generic_Attr.prototype = $c_Lscalatags_generic_Attr.prototype;
$c_Lscalatags_generic_Attr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_generic_Attr.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Attr");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lscalatags_generic_Attr__f_name;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Lscalatags_generic_Attr__f_namespace;
  var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var data$3 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3);
});
$c_Lscalatags_generic_Attr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_generic_Attr)) {
    var x$0$2 = $as_Lscalatags_generic_Attr(x$0);
    if (((this.Lscalatags_generic_Attr__f_raw === $n(x$0$2).Lscalatags_generic_Attr__f_raw) && (this.Lscalatags_generic_Attr__f_name === $n(x$0$2).Lscalatags_generic_Attr__f_name))) {
      var x = this.Lscalatags_generic_Attr__f_namespace;
      var x$2 = $n(x$0$2).Lscalatags_generic_Attr__f_namespace;
      var $x_1 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lscalatags_generic_Attr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lscalatags_generic_Attr.prototype.productArity__I = (function() {
  return 3;
});
$c_Lscalatags_generic_Attr.prototype.productPrefix__T = (function() {
  return "Attr";
});
$c_Lscalatags_generic_Attr.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lscalatags_generic_Attr__f_name;
      break;
    }
    case 1: {
      return this.Lscalatags_generic_Attr__f_namespace;
      break;
    }
    case 2: {
      return this.Lscalatags_generic_Attr__f_raw;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Lscalatags_generic_Attr.prototype.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair = (function(v, ev) {
  if ((v === null)) {
    throw new $c_jl_NullPointerException();
  }
  return new $c_Lscalatags_generic_AttrPair(this, v, ev);
});
function $as_Lscalatags_generic_Attr(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Attr"));
}
function $isArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Attr)));
}
function $asArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Attr;", depth));
}
var $d_Lscalatags_generic_Attr = new $TypeData().initClass($c_Lscalatags_generic_Attr, "scalatags.generic.Attr", ({
  Lscalatags_generic_Attr: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lscalatags_generic_Style(jsName, cssName) {
  this.Lscalatags_generic_Style__f_jsName = null;
  this.Lscalatags_generic_Style__f_cssName = null;
  this.Lscalatags_generic_Style__f_jsName = jsName;
  this.Lscalatags_generic_Style__f_cssName = cssName;
}
$c_Lscalatags_generic_Style.prototype = new $h_O();
$c_Lscalatags_generic_Style.prototype.constructor = $c_Lscalatags_generic_Style;
/** @constructor */
function $h_Lscalatags_generic_Style() {
}
$h_Lscalatags_generic_Style.prototype = $c_Lscalatags_generic_Style.prototype;
$c_Lscalatags_generic_Style.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_generic_Style.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lscalatags_generic_Style.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_generic_Style)) {
    var x$0$2 = $as_Lscalatags_generic_Style(x$0);
    return (((this.Lscalatags_generic_Style__f_jsName === $n(x$0$2).Lscalatags_generic_Style__f_jsName) && (this.Lscalatags_generic_Style__f_cssName === $n(x$0$2).Lscalatags_generic_Style__f_cssName)) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lscalatags_generic_Style.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lscalatags_generic_Style.prototype.productArity__I = (function() {
  return 2;
});
$c_Lscalatags_generic_Style.prototype.productPrefix__T = (function() {
  return "Style";
});
$c_Lscalatags_generic_Style.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscalatags_generic_Style__f_jsName;
  }
  if ((n === 1)) {
    return this.Lscalatags_generic_Style__f_cssName;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$c_Lscalatags_generic_Style.prototype.$colon$eq__O__Lscalatags_generic_StyleValue__Lscalatags_generic_StylePair = (function(v, ev) {
  if ((v === null)) {
    throw new $c_jl_NullPointerException();
  }
  return new $c_Lscalatags_generic_StylePair(this, v, ev);
});
function $as_Lscalatags_generic_Style(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Style) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Style"));
}
function $isArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Style)));
}
function $asArrayOf_Lscalatags_generic_Style(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Style(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Style;", depth));
}
var $d_Lscalatags_generic_Style = new $TypeData().initClass($c_Lscalatags_generic_Style, "scalatags.generic.Style", ({
  Lscalatags_generic_Style: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Option() {
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  $n(outer);
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
      $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
      $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
      if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
        if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
        }
        $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
        $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false;
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
      }
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true;
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  } else {
    $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  }
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  }
  return this;
});
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)));
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else if ((sum < 0)) {
    this.sc_Iterator$SliceIterator__f_dropping = 2147483647;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
    var xs = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.sc_Iterator$SliceIterator__f_underlying, (((-2147483647) + sum) | 0), rest)));
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = sum;
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  var this$1 = $n(mutationCount);
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1.apply__O());
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z();
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_Lscalatags_generic_AttrPair(a, v, ev) {
  this.Lscalatags_generic_AttrPair__f_a = null;
  this.Lscalatags_generic_AttrPair__f_v = null;
  this.Lscalatags_generic_AttrPair__f_ev = null;
  this.Lscalatags_generic_AttrPair__f_a = a;
  this.Lscalatags_generic_AttrPair__f_v = v;
  this.Lscalatags_generic_AttrPair__f_ev = ev;
}
$c_Lscalatags_generic_AttrPair.prototype = new $h_O();
$c_Lscalatags_generic_AttrPair.prototype.constructor = $c_Lscalatags_generic_AttrPair;
/** @constructor */
function $h_Lscalatags_generic_AttrPair() {
}
$h_Lscalatags_generic_AttrPair.prototype = $c_Lscalatags_generic_AttrPair.prototype;
$c_Lscalatags_generic_AttrPair.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_generic_AttrPair.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lscalatags_generic_AttrPair.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_generic_AttrPair)) {
    var x$0$2 = $as_Lscalatags_generic_AttrPair(x$0);
    var x = this.Lscalatags_generic_AttrPair__f_a;
    var x$2 = $n(x$0$2).Lscalatags_generic_AttrPair__f_a;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$1 = this.Lscalatags_generic_AttrPair__f_v;
      var y = $n(x$0$2).Lscalatags_generic_AttrPair__f_v;
      var $x_2 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y);
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Lscalatags_generic_AttrPair__f_ev;
      var x$4 = $n(x$0$2).Lscalatags_generic_AttrPair__f_ev;
      if ((x$3 === null)) {
        var $x_1 = (x$4 === null);
      } else {
        var this$1 = $n(x$3);
        var $x_1 = (this$1 === x$4);
      }
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lscalatags_generic_AttrPair.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lscalatags_generic_AttrPair.prototype.productArity__I = (function() {
  return 3;
});
$c_Lscalatags_generic_AttrPair.prototype.productPrefix__T = (function() {
  return "AttrPair";
});
$c_Lscalatags_generic_AttrPair.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lscalatags_generic_AttrPair__f_a;
      break;
    }
    case 1: {
      return this.Lscalatags_generic_AttrPair__f_v;
      break;
    }
    case 2: {
      return this.Lscalatags_generic_AttrPair__f_ev;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Lscalatags_generic_AttrPair.prototype.applyTo__O__V = (function(t) {
  $n(this.Lscalatags_generic_AttrPair__f_ev).apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Attr__O__V(t, this.Lscalatags_generic_AttrPair__f_a, this.Lscalatags_generic_AttrPair__f_v);
});
function $as_Lscalatags_generic_AttrPair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_AttrPair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.AttrPair"));
}
function $isArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_AttrPair)));
}
function $asArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_AttrPair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.AttrPair;", depth));
}
var $d_Lscalatags_generic_AttrPair = new $TypeData().initClass($c_Lscalatags_generic_AttrPair, "scalatags.generic.AttrPair", ({
  Lscalatags_generic_AttrPair: 1,
  Lscalatags_generic_Modifier: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lscalatags_generic_StylePair(s, v, ev) {
  this.Lscalatags_generic_StylePair__f_s = null;
  this.Lscalatags_generic_StylePair__f_v = null;
  this.Lscalatags_generic_StylePair__f_ev = null;
  this.Lscalatags_generic_StylePair__f_s = s;
  this.Lscalatags_generic_StylePair__f_v = v;
  this.Lscalatags_generic_StylePair__f_ev = ev;
}
$c_Lscalatags_generic_StylePair.prototype = new $h_O();
$c_Lscalatags_generic_StylePair.prototype.constructor = $c_Lscalatags_generic_StylePair;
/** @constructor */
function $h_Lscalatags_generic_StylePair() {
}
$h_Lscalatags_generic_StylePair.prototype = $c_Lscalatags_generic_StylePair.prototype;
$c_Lscalatags_generic_StylePair.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_generic_StylePair.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lscalatags_generic_StylePair.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_generic_StylePair)) {
    var x$0$2 = $as_Lscalatags_generic_StylePair(x$0);
    var x = this.Lscalatags_generic_StylePair__f_s;
    var x$2 = $n(x$0$2).Lscalatags_generic_StylePair__f_s;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$1 = this.Lscalatags_generic_StylePair__f_v;
      var y = $n(x$0$2).Lscalatags_generic_StylePair__f_v;
      var $x_2 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y);
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Lscalatags_generic_StylePair__f_ev;
      var x$4 = $n(x$0$2).Lscalatags_generic_StylePair__f_ev;
      if ((x$3 === null)) {
        var $x_1 = (x$4 === null);
      } else {
        var this$1 = $n(x$3);
        var $x_1 = (this$1 === x$4);
      }
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lscalatags_generic_StylePair.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lscalatags_generic_StylePair.prototype.productArity__I = (function() {
  return 3;
});
$c_Lscalatags_generic_StylePair.prototype.productPrefix__T = (function() {
  return "StylePair";
});
$c_Lscalatags_generic_StylePair.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lscalatags_generic_StylePair__f_s;
      break;
    }
    case 1: {
      return this.Lscalatags_generic_StylePair__f_v;
      break;
    }
    case 2: {
      return this.Lscalatags_generic_StylePair__f_ev;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Lscalatags_generic_StylePair.prototype.applyTo__O__V = (function(t) {
  var this$1 = $n(this.Lscalatags_generic_StylePair__f_ev);
  var s = this.Lscalatags_generic_StylePair__f_s;
  var v = this.Lscalatags_generic_StylePair__f_v;
  this$1.apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Style__O__V(t, s, v);
});
function $as_Lscalatags_generic_StylePair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_StylePair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.StylePair"));
}
function $isArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_StylePair)));
}
function $asArrayOf_Lscalatags_generic_StylePair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_StylePair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.StylePair;", depth));
}
var $d_Lscalatags_generic_StylePair = new $TypeData().initClass($c_Lscalatags_generic_StylePair, "scalatags.generic.StylePair", ({
  Lscalatags_generic_StylePair: 1,
  Lscalatags_generic_Modifier: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index));
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $as_T($thiz.repeat(count));
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
    } else {
      return base;
    }
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_None$() {
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator__f_xs = xs;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = this.sc_ArrayOps$ArrayIterator__f_xs;
  this.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r;
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
    $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.sci_ArraySeq$__f_bitmap$0 = true;
  }
  return $thiz.sci_ArraySeq$__f_emptyImpl;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.sci_ArraySeq$__f_emptyImpl = null;
  this.sci_ArraySeq$__f_bitmap$0 = false;
}
$c_sci_ArraySeq$.prototype = new $h_O();
$c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $c_sci_ArraySeq$.prototype;
var $d_sci_ArraySeq$ = new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  sci_ArraySeq$: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)));
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth));
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.stringPrefix__T() + "(<not computed>)");
}
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
/** @constructor */
function $c_Lscalatags_JsDom$StringFrag(v) {
  this.Lscalatags_JsDom$StringFrag__f_v = null;
  this.Lscalatags_JsDom$StringFrag__f_v = v;
  if ((v === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$c_Lscalatags_JsDom$StringFrag.prototype = new $h_O();
$c_Lscalatags_JsDom$StringFrag.prototype.constructor = $c_Lscalatags_JsDom$StringFrag;
/** @constructor */
function $h_Lscalatags_JsDom$StringFrag() {
}
$h_Lscalatags_JsDom$StringFrag.prototype = $c_Lscalatags_JsDom$StringFrag.prototype;
$c_Lscalatags_JsDom$StringFrag.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_JsDom$StringFrag.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lscalatags_JsDom$StringFrag.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_JsDom$StringFrag)) {
    var x$0$2 = $as_Lscalatags_JsDom$StringFrag(x$0);
    return ((this.Lscalatags_JsDom$StringFrag__f_v === $n(x$0$2).Lscalatags_JsDom$StringFrag__f_v) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lscalatags_JsDom$StringFrag.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lscalatags_JsDom$StringFrag.prototype.productArity__I = (function() {
  return 1;
});
$c_Lscalatags_JsDom$StringFrag.prototype.productPrefix__T = (function() {
  return "StringFrag";
});
$c_Lscalatags_JsDom$StringFrag.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lscalatags_JsDom$StringFrag__f_v;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_Text = (function() {
  return document.createTextNode(this.Lscalatags_JsDom$StringFrag__f_v);
});
$c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_Node = (function() {
  return this.render__Lorg_scalajs_dom_Text();
});
$c_Lscalatags_JsDom$StringFrag.prototype.applyTo__O__V = (function(t) {
  $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V(this, t);
});
function $as_Lscalatags_JsDom$StringFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$StringFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$StringFrag"));
}
function $isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$StringFrag)));
}
function $asArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$StringFrag;", depth));
}
var $d_Lscalatags_JsDom$StringFrag = new $TypeData().initClass($c_Lscalatags_JsDom$StringFrag, "scalatags.JsDom$StringFrag", ({
  Lscalatags_JsDom$StringFrag: 1,
  Lscalatags_generic_Modifier: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_jsdom_Frag: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = "";
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = "";
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos);
      }
      if ((nlPos < 0)) {
        $charAt(this$2, (-1));
      }
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex);
      }
      rest = $as_T(this$3.substring(beginIndex));
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth));
}
/** @constructor */
function $c_Lscalatags_JsDom$TypedTag(tag, modifiers, void$1, namespace) {
  this.Lscalatags_JsDom$TypedTag__f_tag = null;
  this.Lscalatags_JsDom$TypedTag__f_modifiers = null;
  this.Lscalatags_JsDom$TypedTag__f_void = false;
  this.Lscalatags_JsDom$TypedTag__f_namespace = null;
  this.Lscalatags_JsDom$TypedTag__f_tag = tag;
  this.Lscalatags_JsDom$TypedTag__f_modifiers = modifiers;
  this.Lscalatags_JsDom$TypedTag__f_void = void$1;
  this.Lscalatags_JsDom$TypedTag__f_namespace = namespace;
}
$c_Lscalatags_JsDom$TypedTag.prototype = new $h_O();
$c_Lscalatags_JsDom$TypedTag.prototype.constructor = $c_Lscalatags_JsDom$TypedTag;
/** @constructor */
function $h_Lscalatags_JsDom$TypedTag() {
}
$h_Lscalatags_JsDom$TypedTag.prototype = $c_Lscalatags_JsDom$TypedTag.prototype;
$c_Lscalatags_JsDom$TypedTag.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lscalatags_JsDom$TypedTag.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("TypedTag");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Lscalatags_JsDom$TypedTag__f_tag;
  var data$1 = $m_sr_Statics$().anyHash__O__I(x);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
  var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
  acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var data$3 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
  var data$4 = $m_sr_Statics$().anyHash__O__I(x$2);
  acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4);
});
$c_Lscalatags_JsDom$TypedTag.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lscalatags_JsDom$TypedTag)) {
    var x$0$2 = $as_Lscalatags_JsDom$TypedTag(x$0);
    if (((this.Lscalatags_JsDom$TypedTag__f_void === $n(x$0$2).Lscalatags_JsDom$TypedTag__f_void) && (this.Lscalatags_JsDom$TypedTag__f_tag === $n(x$0$2).Lscalatags_JsDom$TypedTag__f_tag))) {
      var x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
      var x$2 = $n(x$0$2).Lscalatags_JsDom$TypedTag__f_modifiers;
      var $x_2 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Lscalatags_JsDom$TypedTag__f_namespace;
      var x$4 = $n(x$0$2).Lscalatags_JsDom$TypedTag__f_namespace;
      if ((x$3 === null)) {
        var $x_1 = (x$4 === null);
      } else {
        var this$1 = $n(x$3);
        var $x_1 = (this$1 === x$4);
      }
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lscalatags_JsDom$TypedTag.prototype.productArity__I = (function() {
  return 4;
});
$c_Lscalatags_JsDom$TypedTag.prototype.productPrefix__T = (function() {
  return "TypedTag";
});
$c_Lscalatags_JsDom$TypedTag.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lscalatags_JsDom$TypedTag__f_tag;
      break;
    }
    case 1: {
      return this.Lscalatags_JsDom$TypedTag__f_modifiers;
      break;
    }
    case 2: {
      return this.Lscalatags_JsDom$TypedTag__f_void;
      break;
    }
    case 3: {
      return this.Lscalatags_JsDom$TypedTag__f_namespace;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
$c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_Element = (function() {
  var elem = document.createElementNS($n(this.Lscalatags_JsDom$TypedTag__f_namespace).uri__T(), this.Lscalatags_JsDom$TypedTag__f_tag);
  $f_Lscalatags_generic_TypedTag__build__O__V(this, elem);
  return elem;
});
$c_Lscalatags_JsDom$TypedTag.prototype.apply__sci_Seq__Lscalatags_JsDom$TypedTag = (function(xs) {
  var this$1 = $n(this.Lscalatags_JsDom$TypedTag__f_modifiers);
  var modifiers$1 = new $c_sci_$colon$colon(xs, this$1);
  var namespace$1 = this.Lscalatags_JsDom$TypedTag__f_namespace;
  var tag = this.Lscalatags_JsDom$TypedTag__f_tag;
  var void$1 = this.Lscalatags_JsDom$TypedTag__f_void;
  return new $c_Lscalatags_JsDom$TypedTag(tag, modifiers$1, void$1, namespace$1);
});
$c_Lscalatags_JsDom$TypedTag.prototype.toString__T = (function() {
  return $as_T(this.render__Lorg_scalajs_dom_Element().outerHTML);
});
$c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_Node = (function() {
  return this.render__Lorg_scalajs_dom_Element();
});
$c_Lscalatags_JsDom$TypedTag.prototype.applyTo__O__V = (function(t) {
  $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V(this, t);
});
function $as_Lscalatags_JsDom$TypedTag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$TypedTag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$TypedTag"));
}
function $isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$TypedTag)));
}
function $asArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$TypedTag;", depth));
}
var $d_Lscalatags_JsDom$TypedTag = new $TypeData().initClass($c_Lscalatags_JsDom$TypedTag, "scalatags.JsDom$TypedTag", ({
  Lscalatags_JsDom$TypedTag: 1,
  Lscalatags_generic_Modifier: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_TypedTag: 1,
  Lscalatags_jsdom_Frag: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)));
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"));
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)));
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth));
}
var $d_sci_Seq = new $TypeData().initClass(1, "scala.collection.immutable.Seq", ({
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
/** @constructor */
function $c_sci_ArraySeq() {
}
$c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
$c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_ArraySeq.prototype.knownSize__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq";
});
$c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647;
});
/** @constructor */
function $c_Lscalatags_JsDom$all$() {
  this.Lscalatags_JsDom$all$__f_onclick$lzy2 = null;
  this.Lscalatags_JsDom$all$__f_onclickbitmap$2 = false;
  this.Lscalatags_JsDom$all$__f_backgroundColor$lzy2 = null;
  this.Lscalatags_JsDom$all$__f_backgroundColorbitmap$2 = false;
  this.Lscalatags_JsDom$all$__f_div$lzy2 = null;
  this.Lscalatags_JsDom$all$__f_divbitmap$2 = false;
  this.Lscalatags_JsDom$all$__f_br$lzy2 = null;
  this.Lscalatags_JsDom$all$__f_brbitmap$2 = false;
  this.Lscalatags_JsDom$all$__f_button$lzy2 = null;
  this.Lscalatags_JsDom$all$__f_buttonbitmap$2 = false;
  this.Lscalatags_JsDom$all$__f_stringStyle = null;
  this.Lscalatags_JsDom$all$__f_booleanStyle = null;
  $n_Lscalatags_JsDom$all$ = this;
  $f_Lscalatags_generic_MouseEventAttrs__$init$__V(this);
  $f_Lscalatags_generic_Aggregate__$init$__V(this);
  $f_Lscalatags_JsDom$Aggregate__$init$__V(this);
}
$c_Lscalatags_JsDom$all$.prototype = new $h_O();
$c_Lscalatags_JsDom$all$.prototype.constructor = $c_Lscalatags_JsDom$all$;
/** @constructor */
function $h_Lscalatags_JsDom$all$() {
}
$h_Lscalatags_JsDom$all$.prototype = $c_Lscalatags_JsDom$all$.prototype;
$c_Lscalatags_JsDom$all$.prototype.onclick__Lscalatags_generic_Attr = (function() {
  if ((!this.Lscalatags_JsDom$all$__f_onclickbitmap$2)) {
    this.Lscalatags_JsDom$all$__f_onclick$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "onclick", null, false);
    this.Lscalatags_JsDom$all$__f_onclickbitmap$2 = true;
  }
  return this.Lscalatags_JsDom$all$__f_onclick$lzy2;
});
$c_Lscalatags_JsDom$all$.prototype.backgroundColor__Lscalatags_generic_Style = (function() {
  if ((!this.Lscalatags_JsDom$all$__f_backgroundColorbitmap$2)) {
    this.Lscalatags_JsDom$all$__f_backgroundColor$lzy2 = new $c_Lscalatags_generic_Style("backgroundColor", "background-color");
    this.Lscalatags_JsDom$all$__f_backgroundColorbitmap$2 = true;
  }
  return this.Lscalatags_JsDom$all$__f_backgroundColor$lzy2;
});
$c_Lscalatags_JsDom$all$.prototype.div__Lscalatags_generic_TypedTag = (function() {
  if ((!this.Lscalatags_JsDom$all$__f_divbitmap$2)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    this.Lscalatags_JsDom$all$__f_div$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "div", false, ns);
    this.Lscalatags_JsDom$all$__f_divbitmap$2 = true;
  }
  return this.Lscalatags_JsDom$all$__f_div$lzy2;
});
$c_Lscalatags_JsDom$all$.prototype.br__Lscalatags_generic_TypedTag = (function() {
  if ((!this.Lscalatags_JsDom$all$__f_brbitmap$2)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    this.Lscalatags_JsDom$all$__f_br$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "br", true, ns);
    this.Lscalatags_JsDom$all$__f_brbitmap$2 = true;
  }
  return this.Lscalatags_JsDom$all$__f_br$lzy2;
});
$c_Lscalatags_JsDom$all$.prototype.button__Lscalatags_generic_TypedTag = (function() {
  if ((!this.Lscalatags_JsDom$all$__f_buttonbitmap$2)) {
    var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    this.Lscalatags_JsDom$all$__f_button$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "button", false, ns);
    this.Lscalatags_JsDom$all$__f_buttonbitmap$2 = true;
  }
  return this.Lscalatags_JsDom$all$__f_button$lzy2;
});
var $d_Lscalatags_JsDom$all$ = new $TypeData().initClass($c_Lscalatags_JsDom$all$, "scalatags.JsDom$all$", ({
  Lscalatags_JsDom$all$: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_GlobalAttrs: 1,
  Lscalatags_generic_InputAttrs: 1,
  Lscalatags_generic_ClipboardEventAttrs: 1,
  Lscalatags_generic_SharedEventAttrs: 1,
  Lscalatags_generic_MediaEventAttrs: 1,
  Lscalatags_generic_MiscellaneousEventAttrs: 1,
  Lscalatags_generic_KeyboardEventAttrs: 1,
  Lscalatags_generic_MouseEventAttrs: 1,
  Lscalatags_generic_WindowEventAttrs: 1,
  Lscalatags_generic_FormEventAttrs: 1,
  Lscalatags_generic_AnchorElementAttrs: 1,
  Lscalatags_generic_Attrs: 1,
  Lscalatags_generic_StyleMisc: 1,
  Lscalatags_generic_Styles: 1,
  Lscalatags_generic_Tags: 1,
  Lscalatags_jsdom_Tags: 1,
  Lscalatags_DataConverters: 1,
  Lscalatags_generic_Aliases: 1,
  Lscalatags_generic_Aggregate: 1,
  Lscalatags_JsDom$Aggregate: 1,
  Lscalatags_LowPriorityImplicits: 1
}));
var $n_Lscalatags_JsDom$all$;
function $m_Lscalatags_JsDom$all$() {
  if ((!$n_Lscalatags_JsDom$all$)) {
    $n_Lscalatags_JsDom$all$ = new $c_Lscalatags_JsDom$all$();
  }
  return $n_Lscalatags_JsDom$all$;
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.sci_ArraySeq$ofRef__f_unsafeArray = null;
  this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
}
$c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $c_sci_ArraySeq$ofRef.prototype;
$c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
});
$c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
  return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
});
$c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed);
});
$c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofRef)) {
    var x2 = $as_sci_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.sci_ArraySeq$ofRef__f_unsafeArray);
});
$c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
function $as_sci_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  sci_ArraySeq$ofRef: 1,
  sci_ArraySeq: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sc_EvidenceIterableFactoryDefaults: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next;
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head;
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::";
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2;
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break;
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break;
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next;
});
var $d_sci_$colon$colon = new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.scm_ListBuffer__f_mutationCount)));
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0);
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first;
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1;
  } else {
    $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1;
  }
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this;
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while ($n(it).hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
      $n(last0).sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0;
  }
  return this;
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer";
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
var $d_scm_ListBuffer = new $TypeData().initClass($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_LHabitTracker__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
