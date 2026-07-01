export default {
  name: 'vaga',
  title: 'Vaga de Emprego',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da Vaga',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'departamento',
      title: 'Departamento / Área',
      type: 'string',
      options: {
        list: [
          { title: 'Proteção da Criança', value: 'Proteção da Criança' },
          { title: 'Prevenção de VBG', value: 'Prevenção de VBG' },
          { title: 'Apoio Psicossocial', value: 'Apoio Psicossocial' },
          { title: 'Educação e Empoderamento', value: 'Educação e Empoderamento' },
          { title: 'Desenvolvimento Comunitário', value: 'Desenvolvimento Comunitário' },
          { title: 'Assistência Humanitária', value: 'Assistência Humanitária' },
          { title: 'Administração', value: 'Administração' },
          { title: 'Finanças', value: 'Finanças' },
          { title: 'Comunicação', value: 'Comunicação' },
          { title: 'Monitorização e Avaliação', value: 'Monitorização e Avaliação' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'localizacao',
      title: 'Localização',
      type: 'string',
      options: {
        list: [
          { title: 'Pemba, Cabo Delgado', value: 'Pemba, Cabo Delgado' },
          { title: 'Nampula', value: 'Nampula' },
          { title: 'Maputo', value: 'Maputo' },
          { title: 'Remoto', value: 'Remoto' },
          { title: 'Outro', value: 'Outro' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipoContrato',
      title: 'Tipo de Contrato',
      type: 'string',
      options: {
        list: [
          { title: 'Tempo Integral', value: 'Tempo Integral' },
          { title: 'Tempo Parcial', value: 'Tempo Parcial' },
          { title: 'Consultoria', value: 'Consultoria' },
          { title: 'Voluntariado', value: 'Voluntariado' },
          { title: 'Estágio', value: 'Estágio' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'prazoInscricao',
      title: 'Prazo de Inscrição',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descricao',
      title: 'Descrição da Vaga',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'requisitos',
      title: 'Requisitos',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Adicione um requisito por linha',
    },
    {
      name: 'beneficios',
      title: 'O que Oferecemos',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Aberta', value: 'aberta' },
          { title: 'Fechada', value: 'fechada' },
          { title: 'Em Análise', value: 'em-analise' },
        ],
        layout: 'radio',
      },
      initialValue: 'aberta',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publicadoEm',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'departamento',
      status: 'status',
    },
    prepare(selection: any) {
      const { title, subtitle, status } = selection;
      const emoji = status === 'aberta' ? '🟢' : status === 'fechada' ? '🔴' : '🟡';
      return {
        title: `${emoji} ${title}`,
        subtitle,
      };
    },
  },
};
