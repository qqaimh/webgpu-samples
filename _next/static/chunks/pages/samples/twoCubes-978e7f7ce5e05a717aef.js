_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"1uVF":function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"d",(function(){return c}));var r=40,o=0,a=16,i=32,s=36,c=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},ZPo7:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/twoCubes",function(){return t("lYvK")}])},lYvK:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),o=t.n(r),a=t("HaE+"),i=t("IOcx"),s=t("SoUo"),c=t("1uVF"),u=t("PpzT");function l(){return(l=Object(a.a)(o.a.mark((function e(n,t){var r,a,s,l,d,p,g,h,v,x,b,w,M,P,V,y,S,C,B,E,G,L;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L=function(){var e=Date.now()/1e3;i.a.rotate(E,V,1,i.b.fromValues(Math.sin(e),Math.cos(e),0)),i.a.rotate(G,y,1,i.b.fromValues(Math.cos(e),Math.sin(e),0)),i.a.multiply(S,B,E),i.a.multiply(S,d,S),i.a.multiply(C,B,G),i.a.multiply(C,d,C)},e.next=3,navigator.gpu.requestAdapter();case 3:return r=e.sent,e.next=6,r.requestDevice();case 6:return a=e.sent,e.next=9,Object(u.a)();case 9:return s=e.sent,l=Math.abs(n.width/n.height),d=i.a.create(),i.a.perspective(d,2*Math.PI/5,l,1,100),p=n.getContext("gpupresent"),g=p.configureSwapChain({device:a,format:"bgra8unorm"}),h=a.createBuffer({size:c.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(h.getMappedRange()).set(c.d),h.unmap(),v=a.createRenderPipeline({vertex:{module:t?a.createShaderModule({code:m.vertex}):a.createShaderModule({code:f.vertex,transform:function(e){return s.compileGLSL(e,"vertex")}}),entryPoint:"main",buffers:[{arrayStride:c.f,attributes:[{shaderLocation:0,offset:c.b,format:"float32x4"},{shaderLocation:1,offset:c.a,format:"float32x4"}]}]},fragment:{module:t?a.createShaderModule({code:m.fragment}):a.createShaderModule({code:f.fragment,transform:function(e){return s.compileGLSL(e,"fragment")}}),entryPoint:"main",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"}}),x=a.createTexture({size:{width:n.width,height:n.height},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT}),b={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:x.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},64,256,320,w=a.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),M=a.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:w,offset:0,size:64}}]}),P=a.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:w,offset:256,size:64}}]}),V=i.a.create(),i.a.translate(V,V,i.b.fromValues(-2,0,0)),y=i.a.create(),i.a.translate(y,y,i.b.fromValues(2,0,0)),S=i.a.create(),C=i.a.create(),B=i.a.create(),i.a.translate(B,B,i.b.fromValues(0,0,-7)),E=i.a.create(),G=i.a.create(),e.abrupt("return",(function(){L(),a.queue.writeBuffer(w,0,S.buffer,S.byteOffset,S.byteLength),a.queue.writeBuffer(w,256,C.buffer,C.byteOffset,C.byteLength),b.colorAttachments[0].attachment=g.getCurrentTexture().createView();var e=a.createCommandEncoder(),n=e.beginRenderPass(b);n.setPipeline(v),n.setVertexBuffer(0,h),n.setBindGroup(0,M),n.draw(c.e,1,0,0),n.setBindGroup(0,P),n.draw(c.e,1,0,0),n.endPass(),a.queue.submit([e.finish()])}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n}",fragment:"#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}"},m={vertex:"\n[[block]] struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragColor : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec4<f32>,\n        [[location(1)]] color : vec4<f32>) -> VertexOutput {\n  return VertexOutput(uniforms.modelViewProjectionMatrix * position, color);\n}\n",fragment:"\n[[stage(fragment)]]\nfn main([[location(0)]] fragColor : vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragColor;\n}\n"};n.default=Object(s.c)({name:"Two Cubes",description:"This example shows some of the alignment requirements                 involved when updating and binding multiple slices of a                 uniform buffer.",slug:"twoCubes",init:function(e,n){return l.apply(this,arguments)},wgslShaders:m,glslShaders:f,source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeColorOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: cubeColorOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: 'bgra8unorm',\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired in render loop.\n        attachment: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const matrixSize = 4 * 16; // 4x4 matrix\n  const offset = 256; // uniformBindGroup offset must be 256-byte aligned\n  const uniformBufferSize = offset + matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup1 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup2 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: offset,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const modelMatrix1 = mat4.create();\n  mat4.translate(modelMatrix1, modelMatrix1, vec3.fromValues(-2, 0, 0));\n  const modelMatrix2 = mat4.create();\n  mat4.translate(modelMatrix2, modelMatrix2, vec3.fromValues(2, 0, 0));\n  const modelViewProjectionMatrix1 = mat4.create() as Float32Array;\n  const modelViewProjectionMatrix2 = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -7));\n\n  const tmpMat41 = mat4.create();\n  const tmpMat42 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    mat4.rotate(\n      tmpMat41,\n      modelMatrix1,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n    mat4.rotate(\n      tmpMat42,\n      modelMatrix2,\n      1,\n      vec3.fromValues(Math.cos(now), Math.sin(now), 0)\n    );\n\n    mat4.multiply(modelViewProjectionMatrix1, viewMatrix, tmpMat41);\n    mat4.multiply(\n      modelViewProjectionMatrix1,\n      projectionMatrix,\n      modelViewProjectionMatrix1\n    );\n    mat4.multiply(modelViewProjectionMatrix2, viewMatrix, tmpMat42);\n    mat4.multiply(\n      modelViewProjectionMatrix2,\n      projectionMatrix,\n      modelViewProjectionMatrix2\n    );\n  }\n\n  return function frame() {\n    updateTransformationMatrix();\n\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix1.buffer,\n      modelViewProjectionMatrix1.byteOffset,\n      modelViewProjectionMatrix1.byteLength\n    );\n    device.queue.writeBuffer(\n      uniformBuffer,\n      offset,\n      modelViewProjectionMatrix2.buffer,\n      modelViewProjectionMatrix2.byteOffset,\n      modelViewProjectionMatrix2.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    passEncoder.setBindGroup(0, uniformBindGroup1);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.setBindGroup(0, uniformBindGroup2);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\n\nlayout(location = 0) out vec4 fragColor;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n}`,\n\n  fragment: `#version 450\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = fragColor;\n}`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragColor : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec4<f32>,\n        [[location(1)]] color : vec4<f32>) -> VertexOutput {\n  return VertexOutput(uniforms.modelViewProjectionMatrix * position, color);\n}\n`,\n  fragment: `\n[[stage(fragment)]]\nfn main([[location(0)]] fragColor : vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragColor;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Two Cubes',\n  description:\n    'This example shows some of the alignment requirements \\\n                involved when updating and binding multiple slices of a \\\n                uniform buffer.',\n  slug: 'twoCubes',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})}},[["ZPo7",0,1,4,2,3,5]]]);